using System;
using System.Linq;
namespace LINQCheetSheet
{
    class Generate
    {
        public static void Start()
        {
            //Range
            var enumerable = Enumerable.Range(0, 10);
            Program.Write("Range", enumerable);

            //Range + Select
            var evens = Enumerable.Range(0, 10).Select(i => i * 2);
            Program.Write("Range+Select", evens);

            //Repeat
            var repeat = Enumerable.Repeat(4, 5);
            Program.Write("Repeat", repeat);

            //Repeat+Random
            var rnd = new Random();
            var rnds = new int[5].Select(_ => rnd.Next());
            Program.Write("Randoms", rnds);

            //Empty
            var empty = Enumerable.Empty<int>();
            Program.Write("Empty", empty);
        }
    }
}
