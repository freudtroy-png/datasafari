import os
from PIL import Image

def resize(img_path, max_dim, quality):
    img = Image.open(img_path)
    w, h = img.size
    if max(w, h) <= max_dim and img.format == 'JPEG':
        return
    if w >= h:
        new_w = max_dim
        new_h = int(h * max_dim / w)
    else:
        new_h = max_dim
        new_w = int(w * max_dim / h)
    img = img.resize((new_w, new_h), Image.LANCZOS)
    if img.mode in ('RGBA', 'P'):
        img = img.convert('RGB')
    img.save(img_path, 'JPEG', quality=quality, optimize=True)

base = r"C:\Users\User\Downloads\DATA SAFARI V2\datasafari-redesign\public\assets"
dests = os.path.join(base, "destinations")
tests = os.path.join(base, "testimonials")

for fname in os.listdir(dests):
    if fname.lower().endswith(('.jpg', '.jpeg', '.png', '.webp')):
        resize(os.path.join(dests, fname), 800, 75)
        print(f"  dest/{fname}")

for fname in os.listdir(tests):
    if fname.lower().endswith(('.jpg', '.jpeg', '.png', '.webp')):
        resize(os.path.join(tests, fname), 400, 75)
        print(f"  testim/{fname}")

print("Done")
