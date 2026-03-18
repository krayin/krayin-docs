# Contribution Guide

[[Toc]]

## Bug Reports

At Krayin, we highly value active collaboration among our community members to continually enhance our platform's performance and reliability. To facilitate this collaborative effort, we extend a warm invitation to both report bugs and submit pull requests.

Rather than solely reporting bugs, we encourage you to take an active role in resolving issues by submitting pull requests containing fixes or negative test cases that effectively highlight the problem. This approach not only identifies issues but also provides practical solutions for their resolution.

When filing a bug report, we kindly request you to include a clear and descriptive title, along with a detailed description of the encountered problem. Additionally, please provide as much relevant information as possible, including a code sample that can reproduce the bug. Such comprehensive reports significantly expedite the troubleshooting process and enable swift resolution.

It is our collective goal to foster collaboration and find effective solutions to the challenges encountered. By actively participating in bug reporting, you not only engage fellow community members in problem-solving but also contribute significantly to the ongoing enhancement of the Krayin project.

## Projects to Contribute

You can contribute to the following projects:

- [Krayin](https://github.com/krayin/laravel-crm/)
- [Krayin docs](https://github.com/krayin/krayin-docs)
- [Krayin rest-api](https://github.com/krayin/rest-api)

## Feature Requests

We welcome proposals for new features and enhancements to the existing Krayin app. If you have a new feature in mind, please be prepared to contribute some of the code required to implement it.

## Branch Selection

Before submitting a pull request, it's important to consider the following points to help you choose the appropriate branch:

- **Bug Fixes**: If you're fixing a bug, make sure to port the fix to the master version. 
- **Critical Bug Fixes**: If you're fixing a critical bug, make sure to port the fix to the latest stable version that supports it (currently vmaster).
- **Feature Requests**: If your request involves a feature with potential breaking changes, send it to the master branch, which corresponds to the upcoming release (v2.1).

## Compiled Assets

To determine the sorting order for Tailwind CSS classes, consult the official Tailwind CSS documentation for guidelines on class organization. Additionally, consider using the Tailwind Raw Reorder extension for VS Code to streamline the sorting process.

## Tailwind Class Reordering

When making changes to blade files that utilize Tailwind CSS classes, it's essential to maintain consistency and organization. Tailwind CSS classes should be ordered according to a predefined structure to enhance readability and maintain a clean codebase.

To determine how Tailwind CSS classes should be sorted, refer to the official Tailwind CSS documentation for guidelines on class ordering. 

[Class Reordering](https://tailwindcss.com/blog/automatic-class-sorting-with-prettier#how-classes-are-sorted)


## Pint Tests

Pint tests are an essential part of ensuring the quality and reliability of code changes in Krayin. When making changes to the code, ensure that all Pint tests pass before submitting your pull request.Before submitting your changes, run the Pint tests locally to verify that all test cases pass. It is important to confirm that the modifications do not cause any Pint test failures or regressions.

* To run the Pint tests locally, execute the following command in your terminal:
```php
vendor/bin/pint
```

## Security Vulnerabilities

If you discover a security vulnerability within Krayin, please notify us immediately by sending an email to Jitendra Singh at [jitendra@webkul.in](mailto:jitendra@webkul.in). We take security vulnerabilities seriously and will address them promptly.

## Coding Style

Krayin follows the [PSR-2](https://github.com/php-fig/fig-standards/blob/master/accepted/PSR-2-coding-style-guide.md) coding standard and the [PSR-4](https://github.com/php-fig/fig-standards/blob/master/accepted/PSR-4-autoloader.md) autoloading standard. These standards ensure consistency and readability in the codebase, similar to Laravel.

## PHPDoc

Below is an example of a valid Krayin doc block that follows the coding style:

```php
/**
 * Register a service with CoreServiceProvider.
 *
 * @param  string|array  $loader
 * @param  \Closure|string|null  $concrete
 * @param  bool  $shared
 */
protected function registerFacades($loader, $concrete = null, $shared = false): void
{
    //
}
```

## Skills

Agent skills for Krayin CRM — a Laravel-based CRM platform.
These skills provide domain-specific, reusable context for AI agents working inside a Krayin CRM codebase.

### Agent Skills

Agent Skills are domain-specific, reusable context modules designed for AI agents working within the Krayin CRM codebase. These skills help AI assistants understand Krayin's architecture, conventions, and best practices, enabling them to provide more accurate and contextual assistance during development.

### What is krayin/agent-skills?

The [krayin/agent-skills](https://github.com/krayin/agent-skills) repository is a collection of specialized knowledge modules for AI agents working with Krayin CRM. These skills are designed to enhance AI-powered development tools with deep understanding of Krayin's Laravel-based CRM platform, including its package structure, testing frameworks, and development patterns.

### Benefits for Developers

- **Enhanced AI Assistance**: AI agents gain contextual understanding of Krayin's architecture and conventions
- **Faster Development**: Reduced time spent explaining Krayin-specific patterns to AI assistants
- **Consistent Code Quality**: AI agents follow Krayin's best practices and coding standards
- **Domain Expertise**: Specialized knowledge for CRM package development and testing
- **Improved Accuracy**: More relevant suggestions and solutions specific to Krayin CRM
- **Seamless Integration**: Works with popular AI development tools like Claude, Cursor, and others

### Setup Instructions

#### Install All Skills

To install all available skills from the repository into your AI agent:

```bash
npx skills add ./agent-skills
```

You can also install for a specific agent:

```bash
npx skills add ./agent-skills -a claude-code
npx skills add ./agent-skills -a cursor
```

#### Install a Specific Skill

To install only a specific skill:

```bash
npx skills add ./agent-skills --skill "crm-package-development"
npx skills add ./agent-skills --skill "pest-testing"
```

### Available Skills

#### `crm-package-development`

Package/module development in Krayin CRM. This skill provides comprehensive guidance for creating and modifying CRM packages, including:

- Creating migrations, models, and repositories
- Setting up routes and controllers
- Building views and layouts
- Configuring menus and ACL
- System configuration

**Activates when**: Creating or modifying CRM packages, migrations, models, repositories, routes, controllers, views, configs, menus, ACL, or system configuration.

#### `pest-testing`

Testing Krayin CRM using the Pest PHP framework. This skill helps with:

- Writing unit and feature tests
- Adding assertions
- Debugging test failures
- Working with datasets and mocking
- Test coverage analysis

**Activates when**: Writing tests, adding assertions, debugging test failures, working with datasets or mocking, or when mentions of test, spec, TDD, expects, assertion, coverage, or verifying behavior are detected.

### Supported AI Tools

The agent skills are compatible with various AI-powered development tools, including:

- **Claude Code** (claude-code)
- **Cursor** (cursor)
- **GitHub Copilot**
- Other AI assistants that support the skills protocol

### Best Practices

When using Krayin agent skills:

1. **Install Relevant Skills**: Only install the skills you need for your current work to keep AI context focused
2. **Keep Skills Updated**: Regularly update the agent-skills repository to get the latest improvements
3. **Combine with Documentation**: Use agent skills alongside Krayin's official documentation for comprehensive understanding
4. **Provide Context**: When working with AI agents, mention specific components or features to activate the appropriate skills
5. **Review AI Suggestions**: Always review and test AI-generated code to ensure it meets your requirements
6. **Contribute Back**: If you identify areas where skills can be improved, consider contributing to the agent-skills repository
7. **Agent-Specific Installation**: Install skills for specific agents when working with multiple AI tools
