import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    // Home Screen Styles
    positivity_container: {
        justifyContent: 'center',
        alignItems: 'center',
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
        borderRadius: 45,
        borderColor: 'green',
        height: 90,
        width: '97%',
        justifyContent: "center",
        alignItems: 'center',
        marginLeft: 6,
        marginBottom: 15,
        borderWidth: 1,
        padding: 10,
      },

      positive_entries_text: {
        fontSize: 20,
      },

      nav_container: {
        height: 35,
        justifyContent: 'center',
        alignItems: 'center',
      },

      nav_text: {
        fontSize: 20,
      },

      // Create Positivity Entry Styles
      text_input: {
        height: 100,
        borderWidth: 3,
        fontSize: 20,
      },

      // Reflection Screen Styles
      reflection_entries_container: {
        borderRadius: 45,
        borderColor: 'green',
        height: 90,
        width: '97%',
        justifyContent: "center",
        alignItems: 'center',
        marginLeft: 6,
        marginBottom: 15,
        borderWidth: 1,
        padding: 10,
      },

      reflection_entries_text: {
        fontSize: 20,
      },

      pos_text_header_conatiner: {
        justifyContent: 'center',
        alignItems: 'center'
      },
      pos_text_header: {
        fontSize: 22,
      },

});

export default styles;