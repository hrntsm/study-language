using System;
using System.Collections.Generic;
using System.IO;
using System.Net;
using System.Text;
using System.Threading;
using Newtonsoft.Json;

namespace TestSystemNet
{
    class Program
    {
        static void Main()
        {
            var url = "https://api.notion.com/v1/pages";
            var token = "Bearer secret_uNFJ99j8z7YuiiMHmdqXLGgbQiwRdNXjoUl1VbKT41x";
            var headers = new Dictionary<string, string>
            {
                { "Authorization", token },
                { "Notion-Version", "2021-05-13" }
            };

            var title = new Title { Text = { Content = "47407b1c-f612-4a99-ac0d-10bd4d1895eb" } };

            var value = new NotionData();
            value.Parent.DatabaseId = "e4c916daf17d4781a42d5d38022f8a95";
            value.Properties.Guid.Title = new List<Title> { title };
            value.Properties.Layer.Select.Name = "test";
            value.Properties.Type.Select.Name = "Rhino.Geometry";


            string data = JsonConvert.SerializeObject(value);
            Http("POST", url, data, headers);
        }

        static string Http(string method, string url, string dataString, Dictionary<string, string> headers, int retry = 3)
        {
            var request = WebRequest.Create(url);
            request.UseDefaultCredentials = true;
            request.Method = method;
            request.ContentLength = 0;

            foreach ((string key, string value) in headers)
            {
                request.Headers.Add(key, value);
            }

            if (dataString != null)
            {
                request.ContentType = "application/json";
                Encoding encoding = Encoding.ASCII;
                byte[] data = encoding.GetBytes(dataString);
                request.ContentLength = data.Length;

                using Stream stream = request.GetRequestStream();
                stream.Write(data, 0, data.Length);
                stream.Close();
            }

            try
            {
                WebResponse response = request.GetResponse();
                Stream dataStream = response.GetResponseStream();
                Console.WriteLine(((HttpWebResponse)response).StatusDescription);

                var reader = new StreamReader(dataStream);
                string responseFromServer = reader.ReadToEnd();

                reader.Close();
                dataStream.Close();
                response.Close();

                return responseFromServer;
            }
            catch (WebException ex)
            {
                if (((HttpWebResponse)ex.Response).StatusDescription == "Not Found" && retry > 0)
                {
                    Thread.Sleep(1000);
                    return Http(method, url, dataString, headers, retry - 1);
                }

                Console.WriteLine(((HttpWebResponse)ex.Response).StatusDescription);
                Stream dataStream = ex.Response.GetResponseStream();
                var reader = new StreamReader(dataStream);

                string responseFromServer = reader.ReadToEnd();
                reader.Close();
                dataStream.Close();

                return responseFromServer;
            }
        }

        public class Parent
        {
            [JsonProperty("database_id")]
            public string DatabaseId { get; set; }
        }

        public class Text
        {
            [JsonProperty("content")]
            public string Content { get; set; }
        }

        public class Title
        {
            [JsonProperty("text")]
            public Text Text = new Text();
        }

        public class GUID
        {
            [JsonProperty("title")]
            public List<Title> Title = new List<Title>();
        }

        public class Select
        {
            [JsonProperty("name")]
            public string Name { get; set; }
        }

        public class Layer
        {
            [JsonProperty("select")]
            public Select Select = new Select();
        }

        public class Type
        {
            [JsonProperty("select")]
            public Select Select = new Select();
        }

        public class Properties
        {
            [JsonProperty("GUID")]
            public GUID Guid = new GUID();

            [JsonProperty("Layer")]
            public Layer Layer = new Layer();

            [JsonProperty("Type")]
            public Type Type = new Type();
        }

        public class NotionData
        {
            [JsonProperty("parent")]
            public Parent Parent = new Parent();

            [JsonProperty("properties")]
            public Properties Properties = new Properties();
        }
    }
}
