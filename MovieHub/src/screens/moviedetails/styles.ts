import { StyleSheet } from 'react-native';
import { colors } from '../../theme/colors';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    padding: 16,
  },
  backButton: {
    marginBottom: 16,
  },
  backText: {
    color: colors.primary,
    fontSize: 16,
    fontWeight: 'bold',
  },
  headerArea: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  poster: {
    width: 110,
    height: 160,
    borderRadius: 12,
  },
  headerDetails: {
    flex: 1,
    marginLeft: 16,
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: colors.textPrimary,
  },
  meta: {
    color: colors.textSecondary,
    fontSize: 13,
    marginTop: 4,
  },
  rating: {
    color: colors.star,
    fontSize: 14,
    fontWeight: 'bold',
    marginTop: 6,
  },
  director: {
    color: colors.textMuted,
    fontSize: 12,
    marginTop: 4,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: colors.textPrimary,
    marginBottom: 8,
  },
  synopsis: {
    color: colors.textSecondary,
    fontSize: 14,
    lineHeight: 20,
    marginBottom: 24,
  },
  actionsRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  actionBtn: {
    flex: 1,
    backgroundColor: colors.glassCard,
    borderColor: colors.surfaceBorder,
    borderWidth: 1,
    borderRadius: 10,
    paddingVertical: 12,
    alignItems: 'center',
    marginHorizontal: 4,
  },
  deleteBtn: {
    borderColor: 'rgba(229, 9, 20, 0.4)',
  },
  actionBtnText: {
    color: colors.textPrimary,
    fontSize: 12,
    fontWeight: '600',
  },
});