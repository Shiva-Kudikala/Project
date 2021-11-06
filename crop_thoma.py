from PIL import Image
import json
import sys



im = Image.open(r"E:/Project-1/Images/Pyro/Wish/Character_Thoma_Wish.png")
width, height = im.size
    
# Setting the points for cropped image
left = width/ 4 - width / 10
top = 0
right = (3 * width) / 4 + width / 10
bottom = height

# Cropped image of above dimension
# (It will not change original image)
im1 = im.crop((left, top, right, bottom))
w,h = im1.size
# im2 = im1.resize((w*3,h*3),resample=Image.BOX) 
# Shows the image in image viewer
im1.save("E:/Project-1/Images/Pyro/Wish/Character_Thoma_Wish_Cropped.png")