import rhinoinside
rhinoinside.load("C:\\Program Files\\Rhino 7\\System")
import System
import Rhino

# for now, you need to explicitly use floating point
# numbers in Point3d constructor
pts = System.Collections.Generic.List[Rhino.Geometry.Point3d]()
pts.Add(Rhino.Geometry.Point3d(0.0,0.0,0.0))
pts.Add(Rhino.Geometry.Point3d(1.0,0.0,0.0))
pts.Add(Rhino.Geometry.Point3d(1.5,2.0,0.0))

crv = Rhino.Geometry.Curve.CreateInterpolatedCurve(pts,3)

serial = Rhino.FileIO.SerializationOptions()
json = crv.ToJSON(serial)

print(json)

mesh = Rhino.Geometry.Mesh.CreateFromCurvePipe(crv, 0.1, 10, 1, 1, True)
draco = Rhino.FileIO.DracoCompression.Compress(mesh).ToBase64String()

print(draco)

obj = System.Collections.Generic.List[Rhino.Geometry.GeometryBase]()
obj.Add(crv)
obj.Add(mesh)

Rhino.FileIO.File3dm.WriteMultipleObjects("./model.3dm", obj)
