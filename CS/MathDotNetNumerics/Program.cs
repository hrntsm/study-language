using System;
using MathNet.Numerics.LinearAlgebra;

/// <summary>
/// https://numerics.mathdotnet.com/
/// https://numerics.mathdotnet.com/Matrix.html
/// </summary>
namespace TestMathDotNetNumerics
{
    class Program
    {
        static void Main(string[] args)
        {
            double[] vArray = new []{0d,0d,0d};
            var v = Vector<double>.Build;
            var aaa = v.Dense(vArray);
            var vvv = v.Dense(3);

            var v1 = Vector<double>.Build.Dense(3);
            var v2 = Vector<double>.Build.Dense(3);
            v2[0] = 1;
            var v3 = Vector<double>.Build.Dense(3);
            v3[1] = 1;
            var item = Vector<double>.Build;

            var e12 = v2 - v1;
            var e13 = v3 - v1;
            var dot_e = e12.DotProduct(e13);
            var norm_e12 = e12.L2Norm();
            var norm_e13 = e13.L2Norm();
            var cosTheta = dot_e / (norm_e12 * norm_e13);
            var sinTheta = Math.Sqrt(1 - Math.Pow(cosTheta, 2));
            var area = 0.5 * norm_e12 * norm_e13 * sinTheta;

            Console.WriteLine(area);
        }
    }
}
