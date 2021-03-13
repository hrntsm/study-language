using System.Collections.Generic;
using System.Linq;

namespace LINQCheetSheet
{
    /// <summary>
    /// LINQ が実際に実行されるのは使われるときなので、
    /// インスタンス化したほうが早い時がある
    /// </summary>
    class Instantiate
    {
        public static void Start()
        {
            var enumerable = Enumerable.Range(0, 10).ToArray();

            var list = enumerable.ToList();

            var dictionary = enumerable.ToDictionary(i => "Pow " + i, i => i * i);
            Program.Write("Dictionary:key", (IEnumerable<string>)dictionary.Keys);
            Program.Write("Dictionary:val", (IEnumerable<int>)dictionary.Values);
        }
    }
}
