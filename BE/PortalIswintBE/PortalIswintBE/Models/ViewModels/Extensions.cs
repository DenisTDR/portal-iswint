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
    }
}