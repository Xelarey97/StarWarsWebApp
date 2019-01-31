using System;
using Avalonia;
using Avalonia.Logging.Serilog;
using app.todoList.ViewModels;
using app.todoList.Views;

namespace app.todoList
{
    class Program
    {
        static void Main(string[] args)
        {
            BuildAvaloniaApp().Start<MainWindow>(() => new MainWindowViewModel());
        }

        public static AppBuilder BuildAvaloniaApp()
            => AppBuilder.Configure<App>()
                .UsePlatformDetect()
                .UseReactiveUI()
                .LogToDebug();
    }
}
