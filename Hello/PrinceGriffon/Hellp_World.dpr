program Hellp_World;

uses
  Forms,
  HelloWorld in 'HelloWorld.pas' {Form1};

{$R *.res}

begin
  Application.Initialize;
  Application.CreateForm(TForm1, Form1);
  Application.Run;
end.
