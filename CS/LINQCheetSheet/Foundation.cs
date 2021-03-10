using System.Linq;

namespace LINQCheetSheet
{
    class Foundation
    {
        public static void Start()
        {
            var enumerable = Enumerable.Range(0, 10).ToArray();

            //Where
            var evens = enumerable.Where(i => i % 2 == 1);
            Program.Write("Where", evens);

            //Select
            var aquares = enumerable.Select(i => i*i);
            Program.Write("Select", aquares);

            //Take
            var oneTwoThree = enumerable.Take(3);
            Program.Write("Take", oneTwoThree);

            //Skip
            var sevenEightNine = enumerable.Skip(7);
            Program.Write("Skip", sevenEightNine);

            //TakeWhile
            var while4 = enumerable.TakeWhile(i => (i + 1)%5 != 0);
            Program.Write("TakeWhile", while4);

            //SkipWhile
            var skip4 = enumerable.SkipWhile(i => (i + 1)%5 != 0);
            Program.Write("SkipWhile", skip4);

            //First
            var first = enumerable.First();
            Program.Write("First", first);

            //First(Bool)
            var first2 = enumerable.First(i => i == 1);
            Program.Write("First2", first2);

            //FirstOrDefault
            var default0 = enumerable.FirstOrDefault(i => i < -10);
            Program.Write("FirstOrDefault", default0);

            //Last
            var last = enumerable.Last(i => i % 2 == 0);
            Program.Write("Last", last);

            //Single
            var single = new[] {19}.Single();
            Program.Write("Single", single);

            //Single(Bool)
            var single2 = enumerable.Single(i => i == 9);
            Program.Write("Single2", single2);
        }
    }
}
