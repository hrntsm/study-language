using System;
using System.Collections.Generic;
using System.Linq;

namespace LINQCheetSheet
{
    class Program
    {
        static void Main(string[] args)
        {
            Foundation.Start();
        }

        public static void Write<T>(string tag, IEnumerable<T> e)
        {
            Console.WriteLine(tag.PadRight(10) + String.Join(",", e));
        }

        public static void Write<T>(string tag, T e)
        {
            Console.WriteLine(tag.PadRight(10) + e);
        }
    }

    class Foundation
    {
        /// <summary>
        /// 基本的なメソッド
        /// </summary>
        public static void Start()
        {
            var enumerable = Enumerable.Range(0, 10).ToArray();

            // Where
            var evens = enumerable.Where(i => i%2 == 1);
            Program.Write("Where", evens);
        }
    }
}
