using System;
using System.Collections.Generic;

namespace LINQCheetSheet
{
    class Program
    {
        static void Main(string[] args)
        {
            Foundation.Start();
            Check.Start();
        }

        public static void Write<T>(string tag, IEnumerable<T> e)
        {
            Console.WriteLine(tag.PadRight(15) + String.Join(",", e));
        }

        public static void Write<T>(string tag, T e)
        {
            Console.WriteLine(tag.PadRight(15) + e);
        }
    }
}
