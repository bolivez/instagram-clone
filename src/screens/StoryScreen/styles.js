import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  image: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'space-between',
  },
  container: {
    height: '100%',
  },
  userInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
  },
  userName: {
    color: 'white',
    fontWeight: '600',
    fontSize: 18,
  },
  bottomContainer: {
    flexDirection: 'row',
    marginBottom: 20,
    marginHorizontal: 10,
  },
  textInputContainer: {
    flex: 1,
    borderWidth: 1,
    borderColor: 'white',
    borderRadius: 50,
    height: 50,
    marginHorizontal: 10,
    paddingHorizontal: 10,
  },
  cameraButton: {
    width: 50,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: 'white',
    borderRadius: 50,
  },
  messageButton: {
    width: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textInput: {
    height: '100%',
    color: 'white',
    fontSize: 16,
  },
  postedTime: {
    color: '#808080',
    fontSize: 16,
    marginLeft: 10,
    fontWeight: '700',
  },
});

export default styles;
