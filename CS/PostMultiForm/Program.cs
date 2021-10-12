using System;
using System.Net.Http;
using System.Threading.Tasks;

namespace SendFile
{
    class Program
    {
        static async Task Main()
        {
            // MultipartFormDataContentのインスタンスをつくる。
            var multiContent = new MultipartFormDataContent();

            // コンテンツを、それぞれ専用の形式でインスタンス化する。
            // imageBytes変数には本当は画像をバイナリ化したものが代入されている想定。
            // ここでは簡単のため適当なバイナリを入れておく。
            var imageContent1 = new ByteArrayContent(new byte[4] { 0, 1, 2, 3 });
            var imageContent2 = new ByteArrayContent(new byte[4] { 0, 1, 2, 3 });
            var nameContent1 = new StringContent("hogehoge");
            var nameContent2 = new StringContent("testest");

            // 専用の形式にしたコンテンツを、MultipartFormDataContentにAddしていく。
            multiContent.Add(imageContent1, "image1", "imageData2");
            multiContent.Add(nameContent1, "name1");
            multiContent.Add(imageContent2, "image2", "imageData2");
            multiContent.Add(nameContent2, "name2");

            // HttpClientでPostする。
            // （本当はHttpClientは都度インスタンスを生成するのではなく、アプリケーション内で使いまわしたほうがよい。）
            var client = new HttpClient();
            var uri = new Uri("http://httpbin.org/post");
            HttpResponseMessage msg = await client.PostAsync(uri, multiContent);

            // Responseの表示
            string responseContent = await msg.Content.ReadAsStringAsync();
            Console.WriteLine($"{responseContent}");
        }
    }
}

