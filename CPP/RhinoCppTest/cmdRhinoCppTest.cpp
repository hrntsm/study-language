// cmdRhinoCppTest.cpp : command file
//

#include "StdAfx.h"
#include "RhinoCppTestPlugIn.h"

////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////
//
// BEGIN RhinoCppTest command
//

#pragma region RhinoCppTest command

// Do NOT put the definition of class CCommandRhinoCppTest in a header
// file. There is only ONE instance of a CCommandRhinoCppTest class
// and that instance is the static theRhinoCppTestCommand that appears
// immediately below the class definition.

class CCommandRhinoCppTest : public CRhinoCommand
{
public:
  // The one and only instance of CCommandRhinoCppTest is created below.
  // No copy constructor or operator= is required.
  // Values of member variables persist for the duration of the application.

  // CCommandRhinoCppTest::CCommandRhinoCppTest()
  // is called exactly once when static theRhinoCppTestCommand is created.
  CCommandRhinoCppTest() = default;

  // CCommandRhinoCppTest::~CCommandRhinoCppTest()
  // is called exactly once when static theRhinoCppTestCommand is destroyed.
  // The destructor should not make any calls to the Rhino SDK. 
  // If your command has persistent settings, then override 
  // CRhinoCommand::SaveProfile and CRhinoCommand::LoadProfile.
  ~CCommandRhinoCppTest() = default;

  // Returns a unique UUID for this command.
  // If you try to use an id that is already being used, then
  // your command will not work. Use GUIDGEN.EXE to make unique UUID.
  UUID CommandUUID() override
  {
    // {1FF2D8F4-6A39-4CB9-9E14-459CFF171DC0}
    static const GUID RhinoCppTestCommand_UUID =
    { 0x1FF2D8F4, 0x6A39, 0x4CB9, { 0x9E, 0x14, 0x45, 0x9C, 0xFF, 0x17, 0x1D, 0xC0 } };
    return RhinoCppTestCommand_UUID;
  }

  // Returns the English command name.
  // If you want to provide a localized command name, then override 
  // CRhinoCommand::LocalCommandName.
  const wchar_t* EnglishCommandName() override { return L"RhinoCppTest"; }

  // Rhino calls RunCommand to run the command.
  CRhinoCommand::result RunCommand(const CRhinoCommandContext& context) override;
};

// The one and only CCommandRhinoCppTest object
// Do NOT create any other instance of a CCommandRhinoCppTest class.
static class CCommandRhinoCppTest theRhinoCppTestCommand;

CRhinoCommand::result CCommandRhinoCppTest::RunCommand(const CRhinoCommandContext& context)
{
  // CCommandRhinoCppTest::RunCommand() is called when the user
  // runs the "RhinoCppTest".

  // TODO: Add command code here.

  // Rhino command that display a dialog box interface should also support
  // a command-line, or script-able interface.

  ON_wString str;
  str.Format(L"The \"%s\" command is under construction.\n", EnglishCommandName());
  const wchar_t* pszStr = static_cast<const wchar_t*>(str);
  if (context.IsInteractive())
    RhinoMessageBox(pszStr, RhinoCppTestPlugIn().PlugInName(), MB_OK);
  else
    RhinoApp().Print(pszStr);

  // TODO: Return one of the following values:
  //   CRhinoCommand::success:  The command worked.
  //   CRhinoCommand::failure:  The command failed because of invalid input, inability
  //                            to compute the desired result, or some other reason
  //                            computation reason.
  //   CRhinoCommand::cancel:   The user interactively canceled the command 
  //                            (by pressing ESCAPE, clicking a CANCEL button, etc.)
  //                            in a Get operation, dialog, time consuming computation, etc.

  return CRhinoCommand::success;
}

#pragma endregion

//
// END RhinoCppTest command
//
////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////
