namespace DndHelper.TauriPlugIn;

using static System.Environment;

public class SomeModel
{
  public string? Id { get; set; }
  public string? Text { get; set; }
}

public class TestController
{
  private static readonly string Store = Path.Combine(GetFolderPath(SpecialFolder.Personal), "DndHelper");

  public TestController()
  {
    if(!Directory.Exists(Store))
    {
      Directory.CreateDirectory(Store);
    }
  }

  public SomeModel Save(SomeModel model)
  {
    File.WriteAllText(Path.Combine(Store, model.Id + ".txt"), model.Text);
    return model;
  }
}
