import webbrowser
import json

def main(element):
    f = open('E:/Project-1/Data/' + element + '.json')
    data = json.load(f)

    for char in data:
        constellation = char['constellation'].replace(' ', '_')
        webbrowser.open('https://genshin-impact.fandom.com/wiki/Hu_Tao/Media?file=' + constellation + '_Shape.png')

for elem in ['Anemo', 'Geo', 'Electro', 'Hydro', 'Pyro', 'Cryo']:
    main(elem)