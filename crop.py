from PIL import Image
import json
import sys

def main(argv):
    element = argv 
    f = open('E:/Project-1/Data/' + element + '.json')

    data = json.load(f)

    for char in data:
        name = char['name'].replace(' ', '_')
        if name == 'Raiden_Shogun' or name == 'Thoma':
            continue 
    # Opens a image in RGB mode
        im = Image.open(r"E:/Project-1/Images/{0}/Wish/Character_{1}_Wish.png".format(element, name))
        print("E:/Project-1/Images/{0}/Wish/Character_{1}_Wish.png".format(element, name))
        
        # Size of the image in pixels (size of original image)
        # (This is not mandatory)
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
        im1.save("E:/Project-1/Images/{0}/Wish/Character_{1}_Wish_Cropped.png".format(element, name))



for elem in ['Anemo', 'Geo', 'Electro', 'Hydro', 'Pyro', 'Cryo']:
    main(elem)