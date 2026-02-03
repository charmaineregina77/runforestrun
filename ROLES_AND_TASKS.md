# Run Forest Run - Roles & Tasks Documentation

## Overview

Run Forest Run is designed to support e-commerce B2C businesses by organizing tasks across 8 key roles that contribute to business success. This document provides a comprehensive overview of the role system and task library.

## Supported Roles

### 1. Growth Marketer
**Focus**: Customer acquisition, conversion optimization, marketing strategy

**Key Responsibilities**:
- Customer acquisition strategy
- Conversion rate optimization
- Email marketing and automation
- Landing page optimization
- A/B testing and experimentation
- Marketing funnel development

**Example Tasks**:
- Set up email capture flows
- Optimize homepage messaging
- Create conversion-focused landing pages
- Design A/B tests
- Build marketing automation sequences

### 2. Media Buyer
**Focus**: Paid advertising, campaign management, ROAS optimization

**Key Responsibilities**:
- Paid ad campaign management
- Creative testing and optimization
- Budget allocation and scaling
- Audience targeting and segmentation
- Performance monitoring and ROAS optimization
- Ad platform setup and configuration

**Example Tasks**:
- Launch ad creatives
- Set up conversion tracking
- Create ad sets and campaigns
- Optimize ad spend and budgets
- Test new creative angles
- Scale winning campaigns

### 3. Designer
**Focus**: Visual design, brand identity, user experience

**Key Responsibilities**:
- Brand identity and visual design
- Product page design (PDP)
- Homepage and landing page design
- Ad creative design
- Email template design
- Mobile-first responsive design

**Example Tasks**:
- Design homepage hero sections
- Create product page layouts
- Design ad creatives (static/video)
- Build email templates
- Create brand assets and guidelines
- Design conversion-focused CTAs

### 4. Product Manager
**Focus**: Store setup, checkout, product experience, platform configuration

**Key Responsibilities**:
- Store and product setup
- Checkout and payment configuration
- Shipping and fulfillment setup
- Product catalog management
- User experience optimization
- Platform integrations

**Example Tasks**:
- Set up product pages
- Configure checkout and shipping
- Install and configure apps
- Set up payment methods
- Optimize product descriptions
- Manage inventory and variants

### 5. Data Analyst
**Focus**: Analytics, tracking, performance measurement, insights

**Key Responsibilities**:
- Analytics setup and tracking
- KPI monitoring and reporting
- Data analysis and insights
- Conversion funnel analysis
- Customer behavior analysis
- Performance dashboards

**Example Tasks**:
- Install analytics tools (GA4, Meta Pixel)
- Set up conversion tracking
- Create performance dashboards
- Analyze conversion funnels
- Track and report KPIs
- Identify optimization opportunities

### 6. Content Creator
**Focus**: Copywriting, messaging, content strategy

**Key Responsibilities**:
- Copywriting and messaging
- Product descriptions
- Email content and sequences
- Social media content
- Blog and SEO content
- Brand voice and tone

**Example Tasks**:
- Write homepage copy
- Create product descriptions
- Write email sequences
- Develop brand messaging
- Create social media content
- Write ad copy and headlines

### 7. Operations
**Focus**: Fulfillment, logistics, customer service, inventory

**Key Responsibilities**:
- Fulfillment and shipping
- Inventory management
- Customer service
- Returns and refunds
- Supplier relationships
- Process optimization

**Example Tasks**:
- Set up shipping zones and rates
- Configure fulfillment workflows
- Set up customer service tools
- Create return policies
- Manage inventory levels
- Optimize fulfillment processes

### 8. Customer Success
**Focus**: Customer satisfaction, retention, loyalty, support

**Key Responsibilities**:
- Customer support
- Retention strategies
- Loyalty programs
- Customer feedback collection
- Upsell and cross-sell
- Customer onboarding

**Example Tasks**:
- Set up customer support system
- Create loyalty program
- Design onboarding flows
- Set up review collection
- Create upsell offers
- Build retention email sequences

## Task Library by Milestone

### Validate Milestone (5 tasks)
Focus: Research, validation, and planning before building

1. **Define target customer persona** (Growth Marketer) - High Impact, Low Effort
2. **Confirm product-market fit signal** (Product Manager) - High Impact, Medium Effort
3. **Choose pricing anchor and strategy** (Growth Marketer) - Medium Impact, Low Effort
4. **Define brand positioning and messaging** (Content Creator) - High Impact, Medium Effort
5. **Analyze competitive landscape** (Data Analyst) - Medium Impact, Low Effort

### Build Milestone (8 tasks)
Focus: Building the store, design, and operational foundations

1. **Finish homepage and product page design** (Designer + Product Manager) - High Impact, Medium Effort
2. **Set up checkout and shipping configuration** (Product Manager + Operations) - High Impact, Low Effort
3. **Install analytics and tracking** (Data Analyst) - High Impact, Low Effort
4. **Add email capture flow** (Growth Marketer) - Medium Impact, Low Effort
5. **Create brand assets and guidelines** (Designer) - Medium Impact, Medium Effort
6. **Write compelling product descriptions** (Content Creator) - High Impact, Medium Effort
7. **Configure fulfillment and inventory** (Operations) - High Impact, Medium Effort
8. **Set up customer support system** (Customer Success) - Medium Impact, Low Effort

### Launch Milestone (7 tasks)
Focus: Going live with ads, email, and initial marketing

1. **Launch your first two ad creatives** (Media Buyer + Designer) - High Impact, Medium Effort
2. **Set ad budget and performance goals** (Media Buyer) - High Impact, Low Effort
3. **Publish launch email sequence** (Growth Marketer + Content Creator) - Medium Impact, Medium Effort
4. **Create ad-specific landing pages** (Designer + Growth Marketer) - High Impact, Medium Effort
5. **Set up retargeting campaigns** (Media Buyer) - Medium Impact, Low Effort
6. **Collect and display social proof** (Customer Success + Content Creator) - Medium Impact, Low Effort
7. **Create performance monitoring dashboard** (Data Analyst) - High Impact, Medium Effort

### Grow Milestone (10 tasks)
Focus: Optimization, scaling, and growth strategies

1. **Test 3 new ad creatives** (Media Buyer + Designer) - High Impact, Medium Effort
2. **Optimize product page for conversions** (Product Manager + Designer) - High Impact, Medium Effort
3. **Introduce upsell and cross-sell offers** (Product Manager + Growth Marketer) - High Impact, Low Effort
4. **Build advanced email automation** (Growth Marketer + Content Creator) - Medium Impact, Medium Effort
5. **Launch customer loyalty program** (Customer Success + Growth Marketer) - Medium Impact, Medium Effort
6. **Scale winning ad campaigns** (Media Buyer) - High Impact, Low Effort
7. **Develop content marketing strategy** (Content Creator + Growth Marketer) - Medium Impact, High Effort
8. **Set up advanced analytics and attribution** (Data Analyst) - Medium Impact, Medium Effort
9. **Optimize fulfillment and operations** (Operations) - Medium Impact, Medium Effort
10. **Collect and act on customer feedback** (Customer Success + Product Manager) - Medium Impact, Low Effort

## Task Prioritization

Tasks are prioritized using two dimensions:

- **Impact**: High, Medium, Low - How much this task moves the needle toward success
- **Effort**: Low, Medium, High - How much time/resources this task requires

**Top Priority Tasks** (High Impact, Low Effort):
- Define target customer persona
- Set up checkout and shipping
- Install analytics and tracking
- Add email capture flow
- Set ad budget and goals
- Set up retargeting campaigns
- Introduce upsell offers
- Scale winning campaigns
- Collect customer feedback

## Multi-Role Tasks

Many tasks require collaboration between roles. Examples:
- "Designer + Product Manager" - Design and product work together
- "Media Buyer + Designer" - Creative and media buying collaboration
- "Growth Marketer + Content Creator" - Marketing and content alignment

The system supports tasks assigned to multiple roles using the format: "Role + Role"

## Usage

### Import Roles
```typescript
import { ROLES, getAllRoles, getRoleDefinition } from "@/lib/roles";
```

### Import Tasks
```typescript
import { 
  ECOMMERCE_TASKS, 
  getTasksByMilestone, 
  getTasksByRole,
  getTopPriorityTasks 
} from "@/lib/tasks";
```

### Use Role Utilities
```typescript
import { 
  filterTasksByRole, 
  groupTasksByRole, 
  getRoleStatistics 
} from "@/lib/utils/roles";
```

## Next Steps

1. **Integrate AI**: Use the role and task system to power AI recommendations
2. **Role-Based Dashboards**: Create views filtered by role
3. **Task Templates**: Generate task templates based on business type
4. **Role Assignment**: Automatically assign tasks to team members by role
5. **Progress Tracking**: Track completion by role to identify bottlenecks
