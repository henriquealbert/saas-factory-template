import vine from '@vinejs/vine'

/**
 * Validator to validate the payload when creating
 * a new session.
 */
export const storeSessionValidator = vine.compile(
  vine.object({
    email: vine.string().email(),
    password: vine.string().minLength(8),
    rememberMe: vine.boolean().optional(),
  })
)

/**
 * Validator to validate the payload when updating
 * an existing session.
 */
export const updateSessionValidator = vine.compile(vine.object({}))
