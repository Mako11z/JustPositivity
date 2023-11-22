import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    // Home Screen Styles
    positivity_container: {
        borderWidth: 2,
        justifyContent: 'center',
        alignItems: 'center',
        width: '65%',
        height: 130,
        borderRadius: 30,
    },
    home_container: {
      flex: 1,
    },

    daily_pos_text: {
        fontSize: 22,
        paddingLeft: 5,
        paddingRight: 5,
    },

    daily_pos_text_daily: {
      fontSize: 25,
    },
    daily_pos_text_positivity: {
      fontSize: 25,
    },

    daily_pos_header_container: {
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center'
    },

    daily_pos_container: {
      marginBottom: 15,
      width: '100%',
      flexDirection: 'row',
      justifyContent: 'space-evenly',
      marginBottom: 55,
    },

    welcome_container: {
        marginBottom: 20,
        height: 75,
        width: '95%',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 75,
    },

    welcome_text: {
        fontSize: 35,
        color: 'rebeccapurple',
    },

    name_text: {
      fontSize: 40,
      paddingLeft: 9,
      color: 'rebeccapurple',
    },

    title_container: {
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 20,
        flexDirection: 'row',
    },

    justText: {
      fontSize: 50,
      fontFamily: 'bold',
      paddingTop: 15,
      color: 'lightseagreen',
    },

    positivityText: {
      fontSize: 50,
      fontFamily: 'bold',
      paddingTop: 15,
      color: 'teal',
    },

    button_header_container_exlpore: {
      alignItems: 'center',
      justifyContent: 'center',
      marginBottom: 20,
    },

    button_header_text: {
      fontSize: 39,
    },

    button: {
        padding: 10,
        borderWidth: 3,
        borderColor: 'rebeccapurple',
        backgroundColor: 'rebeccapurple',
        borderRadius: 33,
        width: '95%',
        height: 90,
        marginLeft: 7,
        alignItems: 'center',
        justifyContent: 'center',
      },

      button_text: {
        fontSize: 24,
        color: 'white',
        fontFamily: 'bold',
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
        borderColor: '#6EB5FF',
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
        borderColor: '#6EB5FF',
        padding: 10,
      },

      reflection_entries_text: {
        fontSize: 20,
      },

      add_reflection_container: {
        borderWidth: 1,
        borderColor: '#6EB5FF',
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
        fontSize: 20,
      },

      reflection_header_conatiner: {
        justifyContent: 'center',
        alignItems: 'center',
        height: 50,
        width: '100%',
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