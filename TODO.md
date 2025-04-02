# TODO List

## Priority 1: Basic User Authentication

- [x] User authentication (signup, login, password reset)
- [ ] Account settings and profile management
  - [ ] Implement settings routes that are currently commented out in private.ts:
    - [ ] Settings Profile routes
    - [ ] Settings Account routes

## Priority 2: Organization Management

- [x] Organization creation and management
- [ ] Team invitations and role management (owner, admin, member)
  - [x] Basic invitation functionality
  - [ ] Role management implementation
- [ ] Organization settings
  - [ ] Settings Organization routes
  - [ ] User invitation system
  - [ ] Invitation cancellation
  - [ ] User removal from organizations

## Controllers Implementation

- [ ] Create the following controllers:
  - [ ] SettingsProfilesController
  - [ ] SettingsAccountsController
  - [ ] SettingsOrganizationsController
  - [ ] Subscription controllers
  - [ ] Flow builder related controllers
  - [ ] Client integration controllers
  - [ ] Template controllers
  - [ ] Dashboard controllers

## Middleware

- [ ] Ensure the organization middleware is properly implemented for the settings routes
- [ ] Create middleware for subscription limits and access control
