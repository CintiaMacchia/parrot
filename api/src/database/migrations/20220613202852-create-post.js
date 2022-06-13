'use strict';
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable('posts', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            contenst: {
                type: Sequelize.STRING
            },
            user_id: {
                type: Sequelize.INTEGER,
                reference: {
                    model: {
                        tableName: 'users',

                    },
                    key: 'id'
                },
                allowNull: false,
            },
            createdAt: {
                allowNull: false,
                type: Sequelize.DATE
            },
            updatedAt: {
                allowNull: false,
                type: Sequelize.DATE
            }
        });
    },
    async down(queryInterface, Sequelize) {
        await queryInterface.dropTable('posts');
    }
};