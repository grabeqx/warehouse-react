import AccountCircle from 'material-ui-icons/AccountCircle';
import Description from 'material-ui-icons/Description';
import ViewList from 'material-ui-icons/ViewList';
import AddCircle from 'material-ui-icons/AddCircle';
import ContentPaste from 'material-ui-icons/ContentPaste';
import Create from 'material-ui-icons/Create';

const MENU = [
    {name: 'Magazyn', url: '/', icon: ViewList},
    {name: 'Zlecenie', url: '/order', icon: ContentPaste},
    {name: 'Raport', url: '/report', icon: Description},
    {name: 'Dodaj produkt', url: '/add', icon: AddCircle},
    {name: 'Uzupełnij stany', url: '/fill', icon: Create},
    {name: 'Admin', url: '/admin', icon: AccountCircle}
]

export default MENU;