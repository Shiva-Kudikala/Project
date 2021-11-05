from PIL import Image
 
# Opens a image in RGB mode
im = Image.open(r"E:/Project-1/Images/Anemo/Wish/Character_Xiao_Wish.png")
 
# Size of the image in pixels (size of original image)
# (This is not mandatory)
width, height = im.size
 
# Setting the points for cropped image
left = width/ 4
top = 0
right = (3 * width) / 4
bottom = height
 
# Cropped image of above dimension
# (It will not change original image)
im1 = im.crop((left, top, right, bottom))
w,h = im1.size
# im2 = im1.resize((w*3,h*3),resample=Image.BOX) 
# Shows the image in image viewer
im1.show()
im1.save('E:/Project-1/Images/Anemo/Wish/Character_Xiao_Wish_Crop.png')