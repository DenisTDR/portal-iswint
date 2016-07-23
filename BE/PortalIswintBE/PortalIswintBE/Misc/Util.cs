using System;
using System.Collections.Generic;
using System.Linq;

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

        public static List<KeyValuePair<string, Dictionary<string, object>>> ConvertToListWithOrder(this Dictionary<string, Dictionary<string, object>> dict)
        {
            var busy = new List<bool>(new bool[dict.Count]);
            var result = busy.Select(b => new KeyValuePair<string, Dictionary<string, object>>(null, null)).ToList();


            foreach (var prop in dict)
            {
                if (prop.Value.ContainsKey("OrderIndex"))
                {
                    var orderIndex = (int) prop.Value["OrderIndex"];
                    busy[orderIndex] = true;
                    result[orderIndex] = prop;
                }
            }
            var cnt = 0;
            foreach (var prop in dict)
            {
                if (!prop.Value.ContainsKey("OrderIndex"))
                {
                    while (busy[cnt])
                    {
                        cnt ++;
                    }
                    result[cnt] = prop;
                    busy[cnt] = true;
                }
            }
            return result;
        }
    }
}