using System;
using System.Linq;
namespace LINQCheetSheet
{
    class Connect
    {
        public static void Start()
        {
            var enumerable = Enumerable.Range(0, 5).ToArray();
            var other = enumerable.Select(i => i * i).ToArray();

            //Concat
            var concat = enumerable.Concat(other);
            Program.Write("Concat", concat);

            //Zip
            var zip = enumerable.Zip(other, (e, o) => (e, o));
            Program.Write("Zip", zip);

            //Join
            var join = enumerable.Join(other, e => (e + 1) * (e + 1), o => o, (e, o) => (e, o));
            Program.Write("Join", join);

            //Union
            var union = enumerable.Union(other);
            Program.Write("Union", union);

            //Intersect
            var intersect = enumerable.Intersect(other);
            Program.Write("Intersect", intersect);

            //Except
            var except = enumerable.Except(other);
            Program.Write("Except", except);

            //XOR
            var xor = union.Except(intersect);
            Program.Write("Xor", xor);
        }
    }
}
