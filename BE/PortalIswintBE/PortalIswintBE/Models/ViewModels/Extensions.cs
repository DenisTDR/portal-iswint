using System;
using System.Collections;

namespace PortalIswintBE.Models.ViewModels
{
    public static class Extensions
    {
        public static void Sanitize(this ViewModel viewModel)
        {
            var type = viewModel.GetType();
            if (type == typeof(RoomViewModel))
            {
                ((RoomViewModel)viewModel).People?.Clear();
            }
        }

        public static bool IsEnumType(this Type type)
        {
            return type.IsEnum;
        }

        public static bool IsEnum(this object o)
        {
            return o.GetType().IsEnumType();
        }

        public static bool IsNumericType(this Type type)
        {
            switch (Type.GetTypeCode(type))
            {
                case TypeCode.Byte:
                case TypeCode.SByte:
                case TypeCode.UInt16:
                case TypeCode.UInt32:
                case TypeCode.UInt64:
                case TypeCode.Int16:
                case TypeCode.Int32:
                case TypeCode.Int64:
                case TypeCode.Decimal:
                case TypeCode.Double:
                case TypeCode.Single:
                    return true;
                default:
                    return false;
            }
        }
        public static bool IsNumeric(this object o)
        {
            return o.GetType().IsNumericType();
        }

        public static bool IsCollectionType(this Type type)
        {
            return typeof(ICollection).IsAssignableFrom(type) || typeof(IList).IsAssignableFrom(type);
        }
        public static bool IsCollection(this object o)
        {
            return o is ICollection;
        }

        public static bool IsStringType(this Type type)
        {
            return typeof(string).IsAssignableFrom(type) || typeof(String).IsAssignableFrom(type);
        }
        public static bool IsString(this object o)
        {
            return o is string || o is String;
        }

        public static bool IsBooleanType(this Type type)
        {
            return typeof(bool).IsAssignableFrom(type) || typeof(Boolean).IsAssignableFrom(type);
        }
        public static bool IsBoolean(this object o)
        {
            return o is bool || o is Boolean;
        }
    }
}