namespace API.TauriPlugIn;

using API.DTOs;
using static System.Environment;

public class TestController
{
    private static readonly string Store = Path.Combine(GetFolderPath(SpecialFolder.Desktop), "CharKeeper");

    public SomeDto Save(SomeDto model)
    {
        if (!Directory.Exists(Store))
        {
            Directory.CreateDirectory(Store);
        }

        File.WriteAllText(Path.Combine(Store, model.Id + ".txt"), model.Text);
        return model;
    }
}
