using System.Linq;

namespace LINQCheetSheet
{
    class Math
    {
        public static void Start()
        {
            var enumerable = Enumerable.Range(0, 10).ToArray();

            //Max
            int max = enumerable.Max();
            Program.Write("Max", max);

            //Max after func
            int max2 = enumerable.Max(i => i * i);
            Program.Write("Max(f)", max2);

            //Min
            int min = enumerable.Min();
            Program.Write("Min", min);

            //Min after func
            int min2 = enumerable.Min(i => i + 5);
            Program.Write("Min(f)", min2);
        }
    }
}
