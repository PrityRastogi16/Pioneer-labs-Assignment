
/**
 * @swagger
 * components:
 *   schemas:
 *     User:
 *       type: object
 *       required:
 *         - name
 *         - email
 *         - password
 *       properties:
 *         name:
 *           type: string
 *           description: The name of the user
 *         email:
 *           type: string
 *           format: email
 *           description: The email address of the user
 *         password:
 *           type: string
 *           format: password
 *           description: The password of the user
 *       example:
 *         name: John Doe
 *         email: johndoe@example.com
 *         password: password123
 */

/**
 * @swagger
 * components:
 *   schemas:
 *     Blacklist:
 *       type: object
 *       required:
 *         - token
 *       properties:
 *         token:
 *           type: string
 *           description: The token to be blacklisted
 *           example: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9
 *         createdAt:
 *           type: string
 *           format: date-time
 *           description: The creation date of the blacklisted token
 *           example: 2022-03-30T12:00:00.000Z
 */

/**
 * @swagger
 * components:
 *   securitySchemes:
 *     bearerAuth:
 *       type: http
 *       scheme: bearer
 *       bearerFormat: JWT
 */


/**
 * @swagger
 * /user/register:
 *   post:
 *     summary: Register a new user
 *     description: Register a new user with name, email, and password
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               email:
 *                 type: string
 *               password:
 *                 type: string
 *     responses:
 *       201:
 *         description: User registered successfully
 *       400:
 *         description: Bad request
 */


/**
 * @swagger
 * components:
 *   schemas:
 *     User:
 *       type: object
 *       properties:
 *         name:
 *           type: string
 *         email:
 *           type: string
 *         password:
 *           type: string
 *       example:
 *         name: John Doe
 *         email: johndoe@example.com
 *         password: password123
 *     ErrorResponse:
 *       type: object
 *       properties:
 *         error:
 *           type: string
 *       example:
 *         error: Error message
 */

/**
 * @swagger
 * /user/login:
 *   post:
 *     summary: Log in with email and password
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                 type: string
 *               password:
 *                 type: string
 *     responses:
 *       '201':
 *         description: Login successful
 *       '400':
 *         description: Invalid email or password
 */




/**
 * @swagger
 * /user/reset/{id}:
 *   put:
 *     summary: Reset user password
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *           format: ObjectId
 *         description: User ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               currPassword:
 *                 type: string
 *               newPassword:
 *                 type: string
 *     responses:
 *       '200':
 *         description: Password reset successfully
 *       '400':
 *         description: Error resetting password
 */

/**
 * @swagger
 * /user/logout:
 *   delete:
 *     summary: Log out user
 *     security:
 *       - cookieAuth: []
 *     responses:
 *       '200':
 *         description: User logged out successfully
 */

/**
 * @swagger
 * /user:
 *   get:
 *     summary: Get all users
 *     responses:
 *       '200':
 *         description: List of users
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/User'
 *       '401':
 *         description: Error getting users
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ErrorResponse'
 */

