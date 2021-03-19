import torch

tensor = torch.ones(4, 4)

if torch.cuda.is_available():
    tensor = tensor.to('cuda')

print(tensor[0])
print(tensor[:, 0])
print(tensor[..., -1])

tensor[:, 1] = 0
print(tensor)

t1 = torch.cat([tensor, tensor, tensor], dim=1)
print(t1)

print("Arithmetic operations")

print("Matrix multiplication")
y1 = tensor @ tensor.T
y2 = tensor.matmul(tensor.T)
y3 = torch.rand_like(tensor)
print(y3)
torch.matmul(tensor, tensor.T, out=y3)
print(y3)

print("Element-wise product")
z1 = tensor * tensor
z2 = tensor.mul(tensor)
print(z2)

print("Aggrigate")
agg = tensor.sum()
agg_item = agg.item()
print(agg_item, type(agg_item))

print("In-place operation")
print(tensor, "\n")
tensor.add_(5)
print(tensor)
