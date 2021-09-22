using System;
using System.Collections.Generic;
using System.IO;
using System.Net;
using System.Text;
using System.Threading;

namespace TestSystemNet
{
    class Program
    {
        static void Main()
        {
            Console.WriteLine("Hello World!");
        }

        private string Http(string method, string url, string dataString, Dictionary<string, string> headers, int retry = 3)
        {
            WebRequest request = WebRequest.Create(url);
            request.UseDefaultCredentials = true;
            request.Method = method;
            request.ContentLength = 0;

            foreach (KeyValuePair<string, string> header in headers)
            {
                request.Headers.Add(header.Key, header.Value);
            }

            if (dataString != null)
            {
                request.ContentType = "application/json";
                var encording = Encoding.UTF8;
                byte[] data = encording.GetBytes(dataString);
                request.ContentLength = data.Length;

                using var stream = request.GetRequestStream();
                stream.Write(data, 0, data.Length);
                stream.Close();
            }

            try
            {
                WebResponse response = request.GetResponse();
                Stream dataStream = response.GetResponseStream();
                var reader = new StreamReader(dataStream);

                string responseFromServer = reader.ReadToEnd();

                reader.Close();
                dataStream.Close();
                response.Close();

                return responseFromServer;
            }
            catch (WebException ex)
            {
                // exception のとき何が返ってきているか確認する。
                // 参考では以下になっている
                // e.Response.StatusDescription == "Not Found"
                if (ex.Response == null || retry > 0)
                {
                    Thread.Sleep(1000);
                    return Http(method, url, dataString, headers, retry - 1);
                }

                Stream dataStream = ex.Response.GetResponseStream();
                var reader = new StreamReader(dataStream);

                string responseFromServer = reader.ReadToEnd();
                reader.Close();
                dataStream.Close();

                return responseFromServer;
            }
        }
    }
}
