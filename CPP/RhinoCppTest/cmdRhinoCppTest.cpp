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
    ON_Plane plane = ON_xy_plane;
    double height = 10.0;
    double radius = 5.0;
    bool bCapBottom = FALSE;

    CRhinoGetOption ro;
    ro.SetCommandPrompt(L"Command options");
    ro.AcceptNothing();
    
    for (;;)
    {
        ro.ClearCommandOptions();

        int hval_option_index = ro.AddCommandOptionNumber(
            RHCMDOPTNAME(L"Height"), &height, L"height value", FALSE, 1.0, 10, 0
        );
        int rval_option_index = ro.AddCommandOptionNumber(
            RHCMDOPTNAME(L"Radius"), &radius, L"radius value", FALSE, 0.1, 10.0
        );
        int bval_option_index = ro.AddCommandOptionToggle(
            RHCMDOPTNAME(L"CapBottom"), RHCMDOPTVALUE(L"False"), RHCMDOPTVALUE(L"True"), bCapBottom, &bCapBottom
        );
        int test_option_index = ro.AddCommandOption(
            RHCMDOPTNAME(L"Test")
        );
        
        CRhinoGet::result res = ro.GetOption();
        if (res == CRhinoGet::nothing)
            break;

        if (res == CRhinoGet::cancel)
            return CRhinoCommand::cancel;

        if (res != CRhinoGet::option)
            return CRhinoCommand::failure;

        const CRhinoCommandOption* option = ro.Option();
        if (nullptr == option)
            return CRhinoCommand::failure;

        int option_index = option->m_option_index;

        if (option_index == hval_option_index)
            continue; // nothing to do

        if (option_index == rval_option_index)
            continue; // nothing to do
    }

    ON_Cone cone(plane, height, radius);
    if (cone.IsValid())
    {
        ON_Brep* cone_brep = ON_BrepCone(cone, bCapBottom);
        if (cone_brep)
        {
            CRhinoBrepObject *cone_objct = new CRhinoBrepObject();
            cone_objct->SetBrep(cone_brep);
            context.m_doc.AddObject(cone_objct);
            context.m_doc.Redraw();
        }
    }

       // CRhinoGet::result res = go.GetOption();

        //if (option_index == bval_option_index)
        //    continue; // nothing to do
    //}

    return CRhinoCommand::success;
}

#pragma endregion

//
// END RhinoCppTest command
//
////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////
