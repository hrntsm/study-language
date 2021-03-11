using System.Linq;

namespace LINQCheetSheet
{
    class Check
    {
        public static void Start()
        {
            var enumerable = Enumerable.Range(0, 10).ToArray();

            //Count
            int count = enumerable.Count();
            Program.Write("Count", count);

            //CountBool
            int countEven = enumerable.Count(i => i % 2 == 0);
            Program.Write("CountEven", countEven);

            //All
            bool all = enumerable.All(i => i < 10);
            Program.Write("All", all);

            //Any
            bool anyEven = enumerable.Any(i => i % 2 == 0);
            Program.Write("Any", anyEven);
        }
    }
}
