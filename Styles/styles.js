import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    // Home Screen Styles
    positivity_container: {
        height: 115,
        width: '95%',
        marginLeft: 7,
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 40,
    },

    daily_pos_text: {
        fontSize: 23,
    },

    daily_pos_header_text: {
      fontSize: 28,
      paddingBottom: 15,
      paddingLeft: 15,
    },

    daily_pos_header_container: {
      marginBottom: 15,
      width: '100%',
      justifyContent: 'center',
    },

    welcome_container: {
        marginBottom: 20,
        height: 75,
        width: '95%',
        justifyContent: 'left',
        alignItems: 'left',
        marginBottom: 75,
    },

    welcome_text: {
        fontSize: 35,
        paddingLeft: 10,
    },

    name_text: {
      fontSize: 40,
      paddingLeft: 10,
    },

    title_container: {
        alignItems: "left",
        marginBottom: 20,
        
    },

    title_text: {
        fontSize: 50,
        fontFamily: 'bold',
        paddingTop: 15,
    },

    button: {
        padding: 10,
        borderWidth: 1,
        borderRadius: 33,
        width: '95%',
        height: 80,
        marginLeft: 7,
        alignItems: 'center',
        justifyContent: 'center',
      },

      button_text: {
        fontSize: 24,
      },

      // Positive Entries Screen Styles
      positive_entries_container: {
        borderRadius: 45,
        height: 110,
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
        paddingLeft: 5,
        paddingRight: 5,
      },

      nav_container: {
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 10,
      },

      nav_text: {
        fontSize: 30,
      },

      // Create Positivity Entry Styles
      text_input: {
        height: 350,
        width: '95%',
        marginLeft: 10,
        borderWidth: 2,
        fontSize: 20,
      },

      add_new_entry: {
        fontSize: 25,
      },

      add_new_entry_conatiner: {
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 1,
        borderRadius: 30,
        marginTop: 20,
        width: '70%',
        height: 75,
        marginLeft: 50,
      },

      create_pos_header_container: {
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 20,
        marginTop: 15,
      },

      create_pos_header: {
        fontSize: 23,
      },

      // Reflection Screen Styles
      reflection_entries_container: {
        borderRadius: 45,
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

      add_reflection_container: {
        borderWidth: 1,
        borderRadius: 30,
        justifyContent: 'center',
        alignItems: 'center',
        width: '70%',
        height: 65,
        marginLeft: 50,
      },

      add_reflection_text: {
        fontSize: 20,
      },

      reflection_header: {
        fontSize: 18,
      },

      reflection_header_conatiner: {
        justifyContent: 'left',
      },

      pos_text_header_conatiner_reflections: {
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 15,
        marginTop: 15,
      },

      // Create Reflection styles
      pos_text_header_conatiner: {
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 30,
        marginTop: 15,
      },
      pos_text_header: {
        fontSize: 23,
      },

});

export default styles;