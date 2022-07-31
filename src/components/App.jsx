import Phonebook from "./phonebook/phonebooks";




export const App = () => {
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101'
      }}


    >
  <Phonebook></Phonebook>

    </div>
  );
};
