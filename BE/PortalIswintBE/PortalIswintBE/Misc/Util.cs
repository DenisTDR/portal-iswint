using System;

namespace PortalIswintBE.Misc
{
    public static class Util
    {
        private static readonly Random Rand = new Random(DateTime.Now.Millisecond);
        
        public static string RandomString(int length)
        {
            lock (Rand)
            {
                var bytesLength = length*6/8 + 10;
                var bytes = new byte[bytesLength];
                Rand.NextBytes(bytes);
                var str64 = Convert.ToBase64String(bytes);
                return str64.Substring(0, length);
            }
        }
    }
}