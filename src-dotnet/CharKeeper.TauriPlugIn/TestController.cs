namespace CharKeeper.TauriPlugIn;

using static System.Environment;

public class SomeModel
{
  public string? Id { get; set; }
  public string? Text { get; set; }
}

public class TestController
{
  private static readonly string Store = Path.Combine(GetFolderPath(SpecialFolder.Desktop), "CharKeeper");

  public SomeModel Save(SomeModel model)
  {
    if(!Directory.Exists(Store))
    {
      Directory.CreateDirectory(Store);
    }

    File.WriteAllText(Path.Combine(Store, model.Id + ".txt"), model.Text);
    return model;
  }
}
