import PySimpleGUI as sg
#set the theme for the screen/window
sg.theme("DarkTanBlue")
#define layout
options=[[sg.Frame('Agents',[[sg.Radio('Agent 1','rd_agents', key ='Agent 1'),
                                         sg.Radio('Agent 2','rd_agents', key='Agent 2'),
                                     sg.Radio('Agent 3','rd_agents', key='Agent 3'),
                                         sg.Radio('Agent 4','rd_agents', key='Agent 4'),
                                         sg.Radio('Agent 5','rd_agents', key='Agent 5')]],border_width=10)],
        [sg.Frame('Properties',[[sg.Radio('Apartments','rd_types', key ='Apartments'),
                                         sg.Radio('House','rd_types', key='House'),
                                     sg.Radio('Condo','rd_types', key='Condo')]],border_width=10)],
       [sg.Frame('Listings',[[sg.Radio('Listing 1','rd_listing', key ='Listing 1'),
                                         sg.Radio('Listing 2','rd_listing', key='Listing 2'),
                                     sg.Radio('Listing 3','rd_listing', key='Listing 3'),
                                     sg.Radio('Listing 4', 'rd_listing', key='Listing 4')]],border_width=10)],
         [sg.Button('Submit'), sg.Button('EXIT'), sg.Button('Edit Info'), sg.Button('User History')]]
choices = [[sg.Frame('Real Estate Information', layout= options)]]
        
items_chosen = [[sg.Text('You have Chosen')],
                [sg.Text("", size=(50,3),key='options')]]
              
# Create layout with two columns using precreated frames
layout = [[sg.Column(choices, element_justification='c'), sg.Column(items_chosen, element_justification='c')]]

#Define Window
window =sg.Window("Electronic Vendor Application",layout)
#Read  values entered by user
event,values=window.read()
#access all the values and if selected add them to a string
strx=""
for val in values:
    if window.FindElement(val).get()==True:
        strx=strx+ " "+ val+","

while True:
    event, values = window.read()  # Read  values entered by user
    if event == sg.WIN_CLOSED or event == 'EXIT':  # If window is closed by user terminate While Loop
        break
    elif event == 'Submit':# If submit button is clicked display chosen values
        window['options'].update(strx)  # output the final string
#Close Window
window.close()    