import { StyleSheet } from 'react-native';
import { colors } from '../../theme/colors';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    justifyContent: 'center',
    padding: 20,
  },
  card: {
    backgroundColor: colors.glassModal,
    borderColor: colors.surfaceBorder,
    borderWidth: 1,
    borderRadius: 20,
    padding: 24,
    alignItems: 'center',
  },
  warningIcon: {
    fontSize: 48,
    marginBottom: 12,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: colors.textPrimary,
    marginBottom: 8,
  },
  subtitle: {
    color: colors.textSecondary,
    fontSize: 14,
    textAlign: 'center',
    marginBottom: 24,
  },
  bold: {
    color: colors.textPrimary,
    fontWeight: 'bold',
  },
  confirmBtn: {
    backgroundColor: colors.primary,
    width: '100%',
    borderRadius: 12,
    paddingVertical: 14,
    alignItems: 'center',
    marginBottom: 10,
  },
  confirmText: {
    color: '#FFF',
    fontSize: 15,
    fontWeight: 'bold',
  },
  cancelBtn: {
    paddingVertical: 10,
  },
  cancelText: {
    color: colors.textMuted,
    fontSize: 14,
  },
});