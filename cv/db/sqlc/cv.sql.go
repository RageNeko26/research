// Code generated by sqlc. DO NOT EDIT.
// versions:
//   sqlc v1.20.0
// source: cv.sql

package db

import (
	"context"
)

const createUser = `-- name: CreateUser :exec
INSERT INTO cvzn_users (
	email
) VALUES (
	$1
)
`

func (q *Queries) CreateUser(ctx context.Context, email string) error {
	_, err := q.db.ExecContext(ctx, createUser, email)
	return err
}
