import { StyleSheet } from 'react-native';
import { colors } from '../../theme/colors';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    padding: 16,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    color: colors.textPrimary,
  },
  subtitle: {
    fontSize: 13,
    color: colors.textSecondary,
    marginBottom: 16,
    marginTop: 2,
  },
  card: {
    flexDirection: 'row',
    backgroundColor: colors.glassCard,
    borderColor: colors.surfaceBorder,
    borderWidth: 1,
    borderRadius: 12,
    padding: 10,
    marginBottom: 12,
    alignItems: 'center',
  },
  poster: {
    width: 50,
    height: 70,
    borderRadius: 8,
  },
  info: {
    marginLeft: 12,
    flex: 1,
  },
  movieTitle: {
    fontSize: 15,
    fontWeight: 'bold',
    color: colors.textPrimary,
  },
  genre: {
    fontSize: 12,
    color: colors.textSecondary,
    marginTop: 2,
  },
  rating: {
    fontSize: 12,
    color: colors.star,
    marginTop: 4,
  },
});