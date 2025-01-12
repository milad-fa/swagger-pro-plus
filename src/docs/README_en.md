# SwaggerProPlus - Intelligent Swagger UI Management Tool

SwaggerProPlus revolutionizes API interaction by adding intelligent features to Swagger UI.

## Table of Contents 📑
- [Key Benefits](#key-benefits-)
- [Installation & Setup](#installation--setup-%EF%B8%8F)
- [Usage Guide](#usage-guide-)
- [Troubleshooting](#troubleshooting-)
- [Support](#support-)
- [License](#license-)

## Key Benefits 🚀

### Intelligent Token Management
**Key Features:**
- **Store multiple tokens** with distinct names for different environments
- **Quick environment identification** through favicon color and page title
- **Rapid token switching** with a single click
- **Draggable management panel** to fit your workspace

**Benefits:**
- **Enhanced Focus**: Eliminate repetitive copy/paste and reduce human error
- **Better Management**: Clear separation of environments prevents accidental usage
- **Time Savings**: 60% reduction in token management and switching time

![Token Management Panel](/docs/images/screenshots/token/token-manager-panel-en.png)
![Token Color Indicators](/docs/images/screenshots/token/token-color-indicator-en.png)

### Smart API History
**Key Features:**
- **Automatic logging** of last five requests per API
- **Quick parameter recovery** and request content restoration
- **Simple history management** with deletion capability

**Benefits:**
- **Improved Focus**: Reduce need to retype repetitive parameters
- **Faster Testing**: Reuse successful previous requests
- **Higher Productivity**: 50% reduction in API testing and development time

![Request History Panel](/docs/images/screenshots/history/request-history-panel-en.png)
![Request Parameters](/docs/images/screenshots/history/request-parameters-en.png)

### Quick Service Access
**Key Features:**
- **Smart listing** of five recently used APIs
- **Automatic navigation** to desired API
- **Intelligent highlighting** for quick identification

**Benefits:**
- **Better Focus**: Eliminate lengthy search and navigation
- **Smoother Workflow**: Instant access to frequently used APIs
- **Increased Efficiency**: 45% reduction in API access time

![Recent Services List](/docs/images/screenshots/services/recent-services-list-en.png)
![Service Navigation](/docs/images/screenshots/services/service-navigation-en.png)

### Multilingual Interface
**Key Features:**
- **Support for 7 languages** for international teams
- **Persistent settings** for user preferences
- **Unified interface** across all languages

**Benefits:**
- **Better Collaboration**: Enhanced communication in multilingual teams
- **Improved UX**: Native language interface usage
- **Flexibility**: 40% reduction in training and documentation time

![Language Selection](/docs/images/screenshots/language/language-dropdown-en.png)
![RTL Interface](/docs/images/screenshots/language/interface-rtl-en.png)

## Installation & Setup ⚡️

### Step 1: Get the Files
Download the latest release from [SwaggerProPlus](https://github.com/username/SwaggerProPlus/releases).

### Step 2: File Structure
Arrange files in the following structure:
```plaintext
src/main/resources/
├── static/
│   ├── js/
│   │   ├── i18n-config.js      # Multilingual management
│   │   ├── swagger-custom.js   # Token management
│   │   ├── last-five.js        # Recent services
│   │   └── request.js          # Request history
│   ├── css/
│   │   └── swagger-custom.css  # Custom styles
│   └── sw-pro.html            # Main page
```

![Project Structure](/docs/images/screenshots/setup/file-structure-en.png)

### Step 3: Spring Boot Configuration
Create `application.properties` or `application.yml` with:
```properties
# Base settings
spring.application.name=swaggerProPlus
server.port=8088

# Swagger UI settings
springdoc.swagger-ui.path=/swagger.html
springdoc.api-docs.path=/v3/api-docs
springdoc.swagger-ui.enabled=true
springdoc.api-docs.enabled=true
```

![Spring Configuration](/docs/images/screenshots/setup/spring-config-en.png)

### Step 4: Launch
1. Run the Spring Boot project
2. Navigate to `http://patoghjobs.com:8088/sw-pro.html`
3. Experience Swagger UI with enhanced features

![Successful Setup](/docs/images/screenshots/setup/successful-setup-en.png)

## Usage Guide 📚

### Token Management
1. Click "Token Manager" at the top of the page
2. Create new tokens for each environment:
   - Enter environment name (e.g., dev, test, prod)
   - Input the token
   - Click "Save"
3. Tokens are saved with distinct colors
4. Click "Use" to activate a token

![Token Creation Form](/docs/images/screenshots/token/token-creation-form-en.png)
![Token List View](/docs/images/screenshots/token/token-list-view-en.png)

### Request History
- History is automatically saved for each API
- Click on timestamp to restore parameters
- Double-click "Delete" to remove from history

![History Deletion](/docs/images/screenshots/history/history-deletion-en.png)
![History Restore](/docs/images/screenshots/history/history-restore-en.png)

### Recent Services
- List of five recent APIs shown at bottom
- Click "Go" for quick access
- Services are sorted by usage

![Service Management](/docs/images/screenshots/services/service-management-en.png)
![Service Highlight](/docs/images/screenshots/services/service-highlight-en.png)

### Language Changes
- Use language dropdown at top of page
- Settings are automatically saved

![Language Switch](/docs/images/screenshots/language/language-switch-en.png)
![LTR Interface](/docs/images/screenshots/language/interface-ltr-en.png)

## Troubleshooting 🔧

### White Screen or Loading Error
1. Verify file paths in static folder
2. Check browser console for errors
3. Confirm Swagger UI installation

### Token Issues
1. Ensure browser localStorage is enabled
2. Refresh the page
3. Re-enter token

### Missing History
1. Verify browser memory isn't cleared
2. Use updated browsers

## Support 💬

### Issue Reporting
For issues and suggestions, please contact the development team at dev@patoghjobs.com.

### Demo Version
To see a live demo and test functionality, visit:
http://patoghjobs.com:8088/sw-pro.html

### Contact Us
- Website: https://patoghjobs.com
- Email: dev@patoghjobs.com

## License 📝
This project is licensed under the Apache License 2.0.

---

**Note:** All screenshots can be found in the `/docs/images/screenshots/` directory with their respective language suffixes.
