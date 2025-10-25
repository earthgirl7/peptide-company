# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Git Workflow & Best Practices

### You Are In Charge of Git Operations
- Claude handles ALL git commands (commit, push, branch management)
- User should never need to run git commands manually
- User provides the desired changes, Claude manages the version control

### Pre-Commit Requirements

**CRITICAL: Always run before committing:**
```bash
npm run build
```

Pre-commit checklist:
- [ ] Run `npm run build` and ensure it succeeds
- [ ] Review all changes with `git diff` and `git status`
- [ ] Verify .gitignore is properly configured
- [ ] Check for accidental inclusion of secrets or credentials
- [ ] Ensure changes are logically grouped (atomic commits)

### Commit Message Format

Follow conventional commits specification:

**Format:**
```
<type>: <subject>

<body (optional)>
```

**Types:**
- `feat`: New feature
- `fix`: Bug fix
- `docs`: Documentation changes
- `style`: Code style changes (formatting, no logic change)
- `refactor`: Code refactoring (no feature change or bug fix)
- `test`: Adding or updating tests
- `chore`: Maintenance tasks (dependencies, build config, etc.)

**Rules:**
- Use imperative mood: "Add feature" NOT "Added feature" or "Adds feature"
- Keep subject line under 50 characters
- Explain WHAT and WHY, not HOW
- One logical change per commit (atomic commits)

**Examples:**
```
feat: add peptide search functionality

fix: resolve authentication timeout issue

docs: update API documentation for peptide endpoints

refactor: simplify database query logic
```

### Development Workflow

**Branch Strategy:**
- Work directly on `main` branch (solo development)
- No feature branches required for this project

**Commit Workflow:**
1. Make code changes
2. Run `npm run build` to verify compilation
3. Review changes with `git status` and `git diff`
4. Stage relevant files with `git add`
5. Create atomic commit with conventional message
6. Push to remote

**Build Requirement:**
- Code MUST build successfully before committing
- Never commit broken or non-compiling code
- If build fails, fix issues before creating commit

### Security Rules

**NEVER commit:**
- `.env` files or environment variables
- API keys, tokens, or secrets
- Credentials or passwords
- Private keys or certificates

**Security checklist before every commit:**
- [ ] Review all staged files for secrets
- [ ] Verify .env files are in .gitignore
- [ ] Check for hardcoded credentials
- [ ] Ensure sensitive config files are excluded

**If secrets are accidentally committed:**
1. Do NOT just remove them in a new commit
2. Rotate/invalidate the exposed secrets immediately
3. Use `git filter-branch` or BFG Repo-Cleaner if needed
4. Force push to rewrite history (only acceptable for secret removal)

### .gitignore Setup

Ensure .gitignore includes:
```
# Environment variables
.env
.env.*
!.env.example

# Dependencies
node_modules/

# Build outputs
dist/
build/
*.log

# IDE
.vscode/
.idea/
*.swp
*.swo

# OS
.DS_Store
Thumbs.db

# Secrets
*.pem
*.key
credentials.json
secrets.yml
```

### Claude's Git Responsibilities

As Claude Code, you will:
- Run all git commands on behalf of the user
- Ensure build succeeds before committing
- Write clear, conventional commit messages
- Review changes for accidental secret inclusions
- Manage the commit workflow end-to-end
- Push changes to remote after successful commits
- Handle any merge conflicts if they arise

The user should focus on describing what they want to build, and you handle the version control.
