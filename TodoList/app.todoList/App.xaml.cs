using Avalonia;
using Avalonia.Markup.Xaml;

namespace app.todoList
{
    public class App : Application
    {
        public override void Initialize()
        {
            AvaloniaXamlLoader.Load(this);
        }
    }
}
