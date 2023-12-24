import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    // Home Screen Styles
    positivity_container: {
        borderWidth: 2,
        justifyContent: 'center',
        alignItems: 'center',
        width: '75%',
        height: '30%',
        borderRadius: 30,
        backgroundColor: 'rebeccapurple',
        borderColor: 'white',
        borderRightWidth: 7,
        borderLeftWidth: 0,
        borderTopWidth: 0,
        borderBottomWidth: 4,
        borderBottomColor: 'plum',
        borderRightColor: 'plum',
        marginLeft: 50,
        marginTop: 20,
        marginBottom: 5,
    },
    home_container: {
      flex: 1,
      justifyContent: 'center', // Center content vertically
      alignItems: 'center',  
    },
    backgroundImage: {
      width: '100%', // Ensure the image takes the full width
      height: '100%', // Ensure the image takes the full height
      resizeMode: 'cover',
      justifyContent: 'center', // Adjust this based on your layout requirements
    },

    daily_pos_text: {
        fontSize: 23,
        paddingLeft: 10,
        paddingRight: 10,
        color: 'white',
    },

    daily_pos_text_daily: {
      fontSize: 22,
      color: 'white',
      fontWeight: 'bold',
    },
    daily_pos_text_positivity: {
      fontSize: 25,
      color: 'white',
      fontWeight: 'bold',
    },

    daily_pos_header_container: {
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center'
    },

    daily_pos_container: {
      width: '100%',
      flexDirection: 'row',
      justifyContent: 'space-evenly',
      marginBottom: 20,
    },

    welcome_container: {
        height: 75,
        width: '95%',
        justifyContent: 'left',
        alignItems: 'left',
        marginBottom: 20,
        marginTop: 0,
    },

    welcome_text: {
        fontSize: 30,
        color: 'white',
        fontFamily: 'Helvetica Neue',
        fontWeight: 'bold',
        paddingLeft: 10,
    },

    name_text: {
      fontSize: 40,
      paddingLeft: 9,
      color: 'black',
    },

    title_container: {
        alignItems: 'center',
        justifyContent: 'left',
        marginBottom: 0,
        flexDirection: 'row',
    },

    justText: {
      fontSize: 45,
      fontWeight: 'bold',
      fontFamily: 'Helvetica',
      paddingTop: 20,
      paddingLeft: 8,
      color: 'white',
    },
    
    positivityText: {
      fontSize: 45,
      fontWeight: 'bold',
      fontFamily: 'Helvetica',
      paddingTop: 20,
      color: 'white',
    },

    button_header_container_exlpore: {
      alignItems: 'center',
      justifyContent: 'center',
      marginBottom: 20,
      marginTop: 30,
    },

    button_header_text: {
      fontSize: 39,
      fontWeight: 'bold',
      color: 'white',
    },

    button: {
        padding: 10,
        borderRightWidth: 5,
        borderRightColor: 'plum',
        borderBottomColor: 'plum',
        borderBottomWidth: 4,
        borderColor: 'rebeccapurple',
        backgroundColor: 'rebeccapurple',
        borderRadius: 33,
        width: '95%',
        height: 90,
        marginLeft: 7,
        marginBottom: 25,
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
        height: 95,
        width: '97%',
        justifyContent: "center",
        alignItems: 'center',
        marginLeft: 6,
        marginBottom: 15,
        borderWidth: 1,
        borderRightWidth: 5,
        borderRightColor: 'plum',
        borderBottomColor: 'plum',
        borderBottomWidth: 4,
        borderColor: 'rebeccapurple',
        backgroundColor: 'rebeccapurple',
        padding: 10,
      },

      positive_entries_text: {
        fontSize: 22,
        paddingLeft: 5,
        paddingRight: 5,
        color: 'white',
      },

      nav_container: {
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderBottomColor: 'plum',
        borderBottomWidth: 2,
        marginBottom: 10,
        margin: 10,
      },

      nav_text: {
        fontSize: 30,
        color: 'white',
      },

      // Create Positivity Entry Styles
      text_input: {
        height: 350,
        width: '95%',
        marginLeft: 10,
        borderWidth: 0,
        
        backgroundColor: 'white',
        paddingLeft: 9,
        fontSize: 20,
        color: 'black',
        borderRadius: 20,
      },

      add_new_entry: {
        fontSize: 25,
        color: 'white',
      },

      add_new_entry_conatiner: {
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 1,
        borderColor: 'rebeccapurple',
        backgroundColor: 'rebeccapurple',
        borderRightWidth: 5,
        borderRightColor: 'plum',
        borderBottomColor: 'plum',
        borderBottomWidth: 4,
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
        fontSize: 25,
        fontWeight: 'bold',
        color: 'white',
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
        borderColor: 'rebeccapurple',
        backgroundColor: 'rebeccapurple',
        borderRightColor: 4,
        borderBottomWidth: 5,
        borderRightColor: 'plum',
        borderBottomColor: 'plum',
        padding: 10,
      },

      reflection_entries_text: {
        fontSize: 20,
        color: 'white',
      },

      add_reflection_container: {
        borderWidth: 1,
        borderColor: 'rebeccapurple',
        backgroundColor: 'rebeccapurple',
        borderRightWidth: 4,
        borderBottomWidth: 3,
        borderRightColor: 'plum',
        borderBottomColor: 'plum',
        borderRadius: 30,
        justifyContent: 'center',
        alignItems: 'center',
        width: '70%',
        height: 65,
        marginLeft: 50,
      },

      add_reflection_text: {
        fontSize: 20,
        color: 'white',
      },

      reflection_header: {
        fontSize: 28,
        color: 'white',
        fontFamily: 'bold',
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
        fontSize: 28,
        color: 'white',
      },

});

export default styles;