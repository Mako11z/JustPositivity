import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    // Home Screen Styles
    positivity_container: {
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 3,
        borderRadius: 30,
        height: 80,
        width: '95%',
        marginLeft: 7,
    },

    daily_pos_text: {
        fontSize: 18,
        fontWeight: 'bold',
        paddingLeft: 15,
        paddingRight: 15,
    },

    welcome_container: {
        marginBottom: 20,
        height: 75,
        width: '95%',
        justifyContent: 'center',
        alignItems: 'center',
    },

    welcome_text: {
        fontSize: 30,
        fontWeight: 'bold',
    },

    title_container: {
        alignItems: "center",
        marginBottom: 20,
        
    },

    title_text: {
        fontSize: 30,
        fontFamily: 'bold',
    },

    button: {
        padding: 10,
        borderRadius: 30,
        borderWidth: 3,
        marginTop: 30,
        width: '95%',
        marginLeft: 7,
        alignItems: 'center',
        justifyContent: 'center',
      },

      // Positive Entries Screen Styles
      positive_entries_container: {
        borderRadius: 30,
        height: 50,
        width: '95%',
        justifyContent: "center",
        alignItems: 'center',
        marginLeft: 10,
        marginBottom: 10,
        borderWidth: 1,
        borderColor: 'gray',
        padding: 10,
      },

      // Reflection Screen Styles
      reflection_entries_container: {
        borderRadius: 30,
        height: 50,
        width: '95%',
        justifyContent: "center",
        alignItems: 'center',
        marginLeft: 10,
        marginBottom: 10,
        borderWidth: 1,
        borderColor: 'gray',
        padding: 10,
      }

});

export default styles;