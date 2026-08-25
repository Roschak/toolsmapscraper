============================================================
PROJECT-PROSPECTHUNTER
GLOBAL BUSINESS PROSPECT DISCOVERY & LEAD INTELLIGENCE
ULTIMATE IMPLEMENTATION PROMPT
============================================================

ROLE
============================================================

You are a SENIOR PRINCIPAL SOFTWARE ARCHITECT, FULL-STACK
ENGINEER, DATA ENGINEER, GEO-SPATIAL ENGINEER, SECURITY
ENGINEER, DEVOPS ENGINEER, QA ENGINEER, and AI ENGINEER.

Your task is to BUILD the complete application described below.

This is NOT a UI-only task.

This is NOT a prototype-only task.

This is NOT a documentation-only task.

You must:

1. Inspect the existing repository.
2. Understand the existing architecture.
3. Determine whether the repository is empty, partially built,
   or contains an existing application.
4. Preserve useful existing work.
5. Build the missing components.
6. Install required dependencies.
7. Implement the database.
8. Implement the backend.
9. Implement the frontend.
10. Implement workers.
11. Implement provider abstraction.
12. Implement data ingestion.
13. Implement search.
14. Implement normalization.
15. Implement entity resolution.
16. Implement website detection.
17. Implement classification.
18. Implement lead scoring.
19. Implement prospect management.
20. Implement exports.
21. Implement analytics.
22. Implement authentication.
23. Implement authorization.
24. Implement security controls.
25. Implement Docker.
26. Implement tests.
27. Run the application.
28. Run tests.
29. Fix errors.
30. Perform a system-wide audit.
31. Verify that all modules are actually connected.
32. Provide a final implementation report.

DO NOT stop after generating files.

DO NOT claim a feature is complete unless it actually works.

DO NOT fake data.

DO NOT fake API responses in production mode.

DO NOT create decorative buttons that do nothing.

============================================================
1. PROJECT IDENTITY
============================================================

PROJECT NAME:

PROJECT-PROSPECTHUNTER

CODENAME:

ProspectHunter

VERSION:

1.0.0

EDITION:

GLOBAL SCALE

TYPE:

Global Business Prospect Discovery,
Website Opportunity Detection,
Lead Intelligence,
and Sales Pipeline Platform.

============================================================
2. CORE PURPOSE
============================================================

The application is an internal sales intelligence platform
designed to help discover businesses around the world that may
need website development services.

The user's current manual workflow is:

Google Maps / business directories
        ↓
Search business
        ↓
Open business
        ↓
Check whether website exists
        ↓
Check business type
        ↓
Record business
        ↓
Find businesses without listed websites
        ↓
Create website demo
        ↓
Contact business owner
        ↓
Follow up
        ↓
Client

PROJECT-PROSPECTHUNTER must transform this into:

BUSINESS DISCOVERY
        ↓
MULTI-SOURCE INGESTION
        ↓
DATA NORMALIZATION
        ↓
ENTITY RESOLUTION
        ↓
WEBSITE DISCOVERY
        ↓
BUSINESS CLASSIFICATION
        ↓
LEAD SCORING
        ↓
PROSPECT FILTERING
        ↓
LEAD PIPELINE
        ↓
DEMO TRACKING
        ↓
CONTACT WORKFLOW
        ↓
CLIENT

============================================================
3. IMPORTANT PRODUCT DEFINITION
============================================================

This application is NOT:

- a Google Maps clone
- an unauthorized Google Maps scraper
- an unrestricted web scraper
- a database mirror of Google Maps
- a CAPTCHA bypass system
- an API limit bypass system
- a spam automation system

This application IS:

A legitimate multi-source business prospect discovery engine.

============================================================
4. DATA SOURCE STRATEGY
============================================================

The architecture MUST support multiple data providers.

Do not tightly couple the application to one provider.

Create:

BusinessDataProvider

Interface:

search()
getBusiness()
healthCheck()
getCapabilities()

Provider adapters:

OvertureProvider
FoursquareProvider
GooglePlacesProvider
GeoapifyProvider
UserDatasetProvider

The application must function even if some providers are
disabled.

============================================================
5. DATA PROVIDER ROLES
============================================================

OVERTURE:

Global/open geographic foundation where applicable.

FOURSQUARE:

Commercial POI/business enrichment where licensed and configured.

GOOGLE PLACES:

Optional verification/enrichment provider.

GEOAPIFY:

Optional geographic/provider integration.

USER DATA:

CSV
XLSX
JSON
PARQUET

The user must be able to enable/disable providers.

============================================================
6. PROVIDER ABSTRACTION
============================================================

Create:

interface BusinessDataProvider {

    search(
        query,
        scope,
        options
    )

    getBusiness(
        providerBusinessId,
        options
    )

    healthCheck()

    getCapabilities()

}

Each provider must implement the same contract.

Never allow provider-specific code to spread throughout the
entire application.

============================================================
7. PROVIDER CONFIGURATION
============================================================

Admin must be able to configure:

Provider name

Enabled

API key

API endpoint

Daily limit

Monthly limit

Rate limit

Priority

Timeout

Retry policy

Cost awareness

Capabilities

Provider status

Never expose API keys in frontend source code.

Use environment variables or secure secret storage.

============================================================
8. GOOGLE PLACES INTEGRATION
============================================================

If Google Places is enabled:

Use official Google Places API.

Do NOT scrape Google Maps HTML.

Do NOT automate browser interaction with Google Maps.

Do NOT bypass:

CAPTCHA
rate limits
authentication
billing
API restrictions

Use only required fields.

Use FieldMask.

Never request wildcard fields unnecessarily.

Potential fields:

places.id
places.displayName
places.formattedAddress
places.location
places.primaryType
places.types
places.businessStatus
places.nationalPhoneNumber
places.internationalPhoneNumber
places.websiteUri
places.googleMapsUri
places.rating
places.userRatingCount

Only request fields required by the configured workflow.

============================================================
9. GOOGLE WEBSITE DETECTION
============================================================

If:

websiteUri exists

then:

WEBSITE LISTED

If:

websiteUri does not exist

then:

NO WEBSITE LISTED

IMPORTANT:

NO WEBSITE LISTED does NOT mean:

"this business definitely has no website."

It means:

"no website was listed by this source."

Never display:

"100% NO WEBSITE"

unless independently verified by a legitimate source.

============================================================
10. WEBSITE DISCOVERY ENGINE
============================================================

Create:

WebsiteDiscoveryEngine

Responsibilities:

1. Check source website fields.
2. Normalize URLs.
3. Validate URLs.
4. Identify likely official domains.
5. Optionally use approved discovery providers.
6. Compare discovered websites.
7. Calculate confidence.

Statuses:

WEBSITE_LISTED

WEBSITE_DISCOVERED

NO_WEBSITE_LISTED

POSSIBLE_WEBSITE

WEBSITE_UNCERTAIN

SOCIAL_ONLY

============================================================
11. WEBSITE VERIFICATION
============================================================

If website verification is enabled:

Verify:

DNS/domain availability

HTTPS availability

HTTP response

redirects

basic HTML availability

title

meta description

mobile-related signals

basic technology detection where lawful

Do NOT:

crawl aggressively

bypass robots

bypass authentication

attack websites

brute-force paths

attempt SSRF

access private networks

============================================================
12. SSRF PROTECTION
============================================================

All server-side URL requests MUST validate:

scheme

hostname

resolved IP

redirect destination

Block:

localhost

127.0.0.1

0.0.0.0

private IPv4

private IPv6

link-local

cloud metadata endpoints

internal hostnames

file://

ftp://

gopher://

other dangerous protocols

Only allow:

http://

https://

============================================================
13. GLOBAL COUNTRY SUPPORT
============================================================

The system must support countries worldwide.

Examples:

Indonesia

United States

Canada

United Kingdom

Australia

New Zealand

Singapore

Malaysia

Japan

South Korea

China

India

Germany

France

Netherlands

Spain

Italy

Brazil

Mexico

Thailand

Vietnam

Philippines

and additional countries.

Do not hardcode country lists inside React components.

Use a scalable geographic dataset.

============================================================
14. LOCATION HIERARCHY
============================================================

Support:

COUNTRY

REGION

STATE

PROVINCE

CITY

DISTRICT

LOCALITY

RADIUS

BOUNDING BOX

POLYGON where supported

The hierarchy must adapt to country-specific administrative
structures.

============================================================
15. SEARCH INTERFACE
============================================================

Main search form:

COUNTRY

REGION

CITY

CATEGORY

KEYWORDS

WEBSITE STATUS

LEAD SCORE

BUSINESS TYPE

DATA SOURCE

RATING

REVIEW COUNT

SEARCH RADIUS

============================================================
16. EXAMPLE SEARCH
============================================================

Country:

Indonesia

Region:

Jawa Barat

City:

Bogor

Category:

Clothing

Keywords:

distro, fashion, streetwear

Website:

NO WEBSITE LISTED

Lead score:

>= 70

Search.

============================================================
17. NATURAL LANGUAGE SEARCH
============================================================

Support natural language queries.

Examples:

"clothing stores in Bogor without websites"

"restaurants in Los Angeles without listed websites"

"distributors in Jakarta"

"fashion stores in Tokyo"

"hot website opportunities in Melbourne"

The system must parse natural language into structured filters.

Before execution display:

PARSED SEARCH

Country:
Indonesia

City:
Bogor

Category:
Clothing

Website:
No Website Listed

Minimum Lead Score:
70

User must be able to edit before execution.

============================================================
18. MASS DISCOVERY
============================================================

The system must support large searches.

Example:

Indonesia
Entire country
Clothing

Do NOT send one massive query.

Break it into:

country

regions

cities

geographic segments

categories

keywords

provider-specific queries

Then process asynchronously.

============================================================
19. SEARCH JOB
============================================================

Create:

SearchJob

Fields:

id

name

country

region

city

district

category

keywords

query

scope

provider

status

progress

totalTasks

completedTasks

failedTasks

resultCount

duplicateCount

websiteListedCount

websiteOpportunityCount

startedAt

completedAt

createdAt

error

============================================================
20. SEARCH JOB STATES
============================================================

QUEUED

RUNNING

PAUSED

COMPLETED

FAILED

CANCELLED

============================================================
21. WORKER SYSTEM
============================================================

Use asynchronous workers.

Recommended:

Redis

BullMQ

Architecture:

Frontend
    ↓
API
    ↓
SearchJob
    ↓
Redis Queue
    ↓
Worker
    ↓
Provider
    ↓
Normalize
    ↓
Deduplicate
    ↓
Classify
    ↓
Score
    ↓
Persist
    ↓
Analytics

Workers must support:

parallel processing

rate limiting

retry

exponential backoff

pause

resume

cancel

progress

dead-letter handling

============================================================
22. RETRY POLICY
============================================================

Retry transient errors:

429

500

502

503

504

network timeout

connection reset

Do not endlessly retry invalid requests.

Use exponential backoff with jitter.

============================================================
23. RATE LIMITING
============================================================

Every provider must have independent rate limiting.

Example:

Provider A:

10 req/sec

Provider B:

5 req/sec

Provider C:

2 req/sec

Never exceed configured limits.

============================================================
24. API BUDGET PROTECTION
============================================================

Before starting a large job show:

Provider

Scope

Estimated operations

Configured daily limit

Configured monthly limit

Potential cost if known

The user must confirm large operations.

Implement:

daily limit

monthly limit

per-job limit

concurrent job limit

When limit is reached:

PAUSE JOB

Do not continue automatically.

============================================================
25. DATA LAKE
============================================================

For large-scale data use:

Object Storage

Parquet

DuckDB

ClickHouse

PostgreSQL

Redis

Architecture:

SOURCE DATA
    ↓
OBJECT STORAGE
    ↓
PARQUET
    ↓
PROCESSING
    ↓
CLICKHOUSE
    ↓
PROSPECT QUERY
    ↓
POSTGRESQL

============================================================
26. POSTGRESQL PURPOSE
============================================================

PostgreSQL is for application data:

users

roles

prospects

lead statuses

notes

tags

search jobs

search presets

exports

settings

audit logs

demo tracking

provider configuration metadata

============================================================
27. CLICKHOUSE PURPOSE
============================================================

ClickHouse is for large-scale analytics:

business counts

country statistics

category statistics

lead statistics

website opportunity statistics

provider coverage

search analytics

geographic aggregations

============================================================
28. PARQUET
============================================================

Support Parquet for large datasets.

Partition by:

country

region

category

Example:

data/

    indonesia/

        jawa-barat/

            clothing/

            restaurant/

            distributor/

        jakarta/

            clothing/

    united-states/

        california/

            clothing/

============================================================
29. ENTITY RESOLUTION
============================================================

Multiple providers may return the same business.

Example:

Foursquare:

ABC Clothing

Google:

ABC Clothing Store

Overture:

ABC Clothing

The system must identify likely duplicates.

Signals:

provider ID

business name

phone

address

coordinates

website

category

============================================================
30. ENTITY MATCH CONFIDENCE
============================================================

States:

EXACT_MATCH

HIGH_CONFIDENCE_MATCH

PROBABLE_MATCH

POSSIBLE_MATCH

NO_MATCH

Do not merge uncertain businesses automatically.

============================================================
31. NORMALIZED BUSINESS ENTITY
============================================================

Create:

BusinessEntity

Fields:

id

canonicalName

providerIds

country

region

city

district

address

latitude

longitude

categories

primaryCategory

businessModel

legalEntity

phone

website

socialLinks

rating

reviewCount

businessStatus

sourceProviders

dataConfidence

createdAt

updatedAt

lastVerifiedAt

============================================================
32. PROVIDER IDs
============================================================

Store separately:

overtureId

foursquareId

googlePlaceId

geoapifyId

Do not assume IDs are interchangeable.

============================================================
33. BUSINESS CLASSIFICATION
============================================================

Automatically classify businesses.

Primary categories:

CLOTHING

FASHION

RETAIL

WHOLESALE

DISTRIBUTOR

SUPPLIER

MANUFACTURER

RESTAURANT

CAFE

HOTEL

SALON

BARBERSHOP

BEAUTY

AUTOMOTIVE

WORKSHOP

CONSTRUCTION

CONTRACTOR

PROPERTY

REAL_ESTATE

EDUCATION

HEALTHCARE

TECHNOLOGY

AGENCY

PROFESSIONAL_SERVICES

LOGISTICS

FOOD_AND_BEVERAGE

ENTERTAINMENT

SPORTS

FITNESS

TRAVEL

OTHER

UNKNOWN

============================================================
34. BUSINESS MODEL
============================================================

Classify:

RETAILER

DISTRIBUTOR

WHOLESALER

MANUFACTURER

SERVICE_PROVIDER

FRANCHISE

CHAIN

INDEPENDENT

ONLINE_BUSINESS

PHYSICAL_STORE

MULTI_LOCATION

UNKNOWN

============================================================
35. LEGAL ENTITY CLASSIFICATION
============================================================

Possible:

PT

CV

LLC

INC

LTD

CORP

PLC

PARTNERSHIP

SOLE_PROPRIETORSHIP

UNKNOWN

If inferred from business name:

mark:

INFERRED

Never represent an inference as verified legal status.

============================================================
36. CLASSIFICATION ENGINE
============================================================

Use deterministic rules first.

Then structured provider categories.

Then optional AI classification.

The AI output must contain:

category

businessModel

confidence

reason

source

Keep source facts separate from AI inference.

============================================================
37. LEAD SCORE
============================================================

Score:

0–100

Default weights:

NO WEBSITE LISTED
+35

SOCIAL ONLY
+10

PHONE AVAILABLE
+10

COMPLETE ADDRESS
+5

BUSINESS ACTIVE
+10

HIGH REVIEW COUNT
+5

COMMERCIAL CATEGORY
+10

HIGH WEBSITE NEED
+10

HIGH DATA CONFIDENCE
+5

Weights must be configurable.

============================================================
38. LEAD PRIORITY
============================================================

90–100:

HOT

75–89:

HIGH

50–74:

MEDIUM

25–49:

LOW

0–24:

VERY_LOW

============================================================
39. WEBSITE OPPORTUNITY
============================================================

Create:

websiteOpportunity

TRUE when:

websiteStatus == NO_WEBSITE_LISTED

AND

leadScore >= configurable threshold

Example:

leadScore >= 70

============================================================
40. SOCIAL-ONLY DETECTION
============================================================

If:

website missing

and

Instagram/TikTok/Facebook/social profile exists

then:

SOCIAL_ONLY

This can increase lead score.

============================================================
41. PROSPECT MODEL
============================================================

Create:

Prospect

Fields:

id

businessEntityId

sourceType

businessName

classification

classificationConfidence

businessModel

businessModelConfidence

websiteStatus

websiteUrl

websiteConfidence

phone

country

region

city

address

rating

reviewCount

businessStatus

leadScore

priority

leadStatus

demoStatus

demoUrl

notes

createdAt

updatedAt

lastVerifiedAt

============================================================
42. PROSPECT SOURCE
============================================================

Possible:

GOOGLE_PLACES

FOURSQUARE

OVERTURE

GEOAPIFY

USER_IMPORT

MANUAL

OTHER_APPROVED_SOURCE

============================================================
43. LEAD PIPELINE
============================================================

Statuses:

NEW

RESEARCHED

DEMO_CREATED

DEMO_READY

CONTACTED

FOLLOW_UP

INTERESTED

NEGOTIATION

CLIENT

NO_RESPONSE

NOT_INTERESTED

LOST

ARCHIVED

============================================================
44. DEMO TRACKING
============================================================

Fields:

demoStatus

demoUrl

demoCreatedAt

demoNotes

Statuses:

NOT_CREATED

IN_PROGRESS

READY

SENT

APPROVED

REJECTED

============================================================
45. PROSPECT NOTES
============================================================

Allow internal notes.

Examples:

"Instagram active."

"Business has no listed website."

"Demo prepared."

"Owner contacted."

"Follow up next week."

============================================================
46. TAG SYSTEM
============================================================

Default tags:

WEBSITE_OPPORTUNITY

HOT_LEAD

SOCIAL_ONLY

DISTRIBUTOR

RETAIL

CLOTHING

RESTAURANT

BOGOR

INDONESIA

DEMO_READY

FOLLOW_UP

Allow custom tags.

============================================================
47. BULK ACTIONS
============================================================

Select multiple prospects.

Actions:

Change status

Add tag

Add note

Export

Archive

Assign

Create demo batch

============================================================
48. PROSPECT DETAIL PAGE
============================================================

Route:

/prospects/[id]

Sections:

Business Identity

Location

Contact

Website

Social

Classification

Lead Score

Sources

Data Confidence

Notes

Sales Pipeline

Demo

Audit History

============================================================
49. PROSPECT CARD
============================================================

Design:

--------------------------------------------

🔥 WEBSITE OPPORTUNITY

DISTRO XYZ

CLOTHING
RETAIL

Bogor, Jawa Barat

Website:

NO WEBSITE LISTED

Phone:

AVAILABLE

Social:

FOUND

Rating:

4.7

Lead Score:

91

Priority:

HOT

[VIEW]

[OPEN MAP]

[ADD TO LEADS]

--------------------------------------------

============================================================
50. MAIN DASHBOARD
============================================================

Create a premium global sales intelligence dashboard.

Metrics:

TOTAL BUSINESSES

WEBSITE LISTED

NO WEBSITE LISTED

WEBSITE OPPORTUNITIES

SOCIAL ONLY

HOT LEADS

CONTACTED

INTERESTED

CLIENTS

============================================================
51. DASHBOARD VISUALIZATION
============================================================

Charts:

Businesses by country

Businesses by category

Website status

Lead score distribution

Lead funnel

Top opportunity cities

Top categories

Conversion rate

============================================================
52. DISCOVER PAGE
============================================================

Primary workflow.

Show:

COUNTRY

REGION

CITY

CATEGORY

KEYWORDS

WEBSITE STATUS

LEAD SCORE

BUSINESS MODEL

SOURCE

RATING

SEARCH

Use a responsive professional UI.

============================================================
53. SEARCH RESULTS
============================================================

Results table:

Business

Category

Business Model

Country

Region

City

Website Status

Phone

Rating

Reviews

Lead Score

Priority

Lead Status

Demo

Actions

Features:

sort

filter

search

pagination

column visibility

bulk selection

============================================================
54. HOT LEADS PAGE
============================================================

Automatically show:

leadScore >= configured threshold

Sort:

leadScore DESC

============================================================
55. WEBSITE OPPORTUNITIES PAGE
============================================================

Show:

NO WEBSITE LISTED

and

leadScore >= threshold

Display:

business

category

location

phone

social

score

priority

demo status

lead status

============================================================
56. SEARCH JOBS PAGE
============================================================

Show:

Job ID

Name

Scope

Provider

Status

Progress

Businesses

Duplicates

Website Opportunities

Errors

Started

Completed

Actions:

Pause

Resume

Cancel

View Results

============================================================
57. SEARCH PRESETS
============================================================

Allow users to save:

Country

Region

City

Category

Keywords

Website Status

Lead Score

Provider

Radius

Example:

Bogor Clothing Opportunities

============================================================
58. GLOBAL MAP
============================================================

Optional but recommended.

Display:

businesses

clusters

website opportunities

hot leads

Use authorized mapping technology.

Do not use map interaction as an unauthorized data extraction
mechanism.

============================================================
59. ANALYTICS
============================================================

Analytics:

total businesses

website listed

no website listed

website opportunities

hot leads

contacted

interested

clients

conversion rate

============================================================
60. COUNTRY ANALYTICS
============================================================

Example:

Indonesia

Prospects:
1,240,000

Website Opportunities:
210,000

Hot:
41,000

United States

Prospects:
...

The numbers MUST reflect actual indexed data.

Never invent numbers.

============================================================
61. CATEGORY ANALYTICS
============================================================

Show:

Clothing

Restaurant

Distributor

Retail

Manufacturer

Service

etc.

============================================================
62. DATA SOURCE DASHBOARD
============================================================

Show:

Provider

Status

Records processed

Errors

Last successful sync

Rate limit

Configured limit

Health

============================================================
63. PROVIDER HEALTH
============================================================

States:

HEALTHY

DEGRADED

RATE_LIMITED

OFFLINE

DISABLED

UNKNOWN

============================================================
64. EXPORT SYSTEM
============================================================

Support:

XLSX

CSV

JSON

PARQUET

Export:

SELECTED

FILTERED

CURRENT_SEARCH

HOT_LEADS

WEBSITE_OPPORTUNITIES

============================================================
65. EXPORT SECURITY
============================================================

Prevent spreadsheet formula injection.

Escape/sanitize values beginning with:

=

+

-

@

when appropriate.

============================================================
66. DATA GOVERNANCE
============================================================

Every record must contain:

source

sourceId

sourceType

retrievedAt

dataConfidence

Do not represent provider data as internally verified unless
verified.

Keep:

SOURCE FACT

AI INFERENCE

USER INPUT

separate.

============================================================
67. DATA RETENTION
============================================================

Implement configurable retention.

Examples:

search job history

audit logs

temporary provider data

internal notes

prospect records

The system must allow deletion.

Do not assume provider data can be stored indefinitely.

Respect each provider's current license and data retention rules.

============================================================
68. EXPORT POLICY
============================================================

Before exporting provider-sourced data:

validate whether the configured source permits the requested
export and retention.

Do not create a mechanism to bypass provider licensing.

If export is not permitted:

disable the restricted fields

and explain why.

User-owned/imported data may follow separate rules.

============================================================
69. AUTHENTICATION
============================================================

Internal application.

Support:

email/password

optional OAuth

Roles:

ADMIN

SALES

ANALYST

VIEWER

============================================================
70. RBAC
============================================================

ADMIN:

everything

SALES:

prospects

notes

pipeline

exports according to policy

ANALYST:

discovery

analytics

prospect research

VIEWER:

read-only

============================================================
71. ADMIN PANEL
============================================================

Admin can configure:

providers

API keys

limits

categories

classification rules

lead scoring

retention

users

roles

export rules

system settings

============================================================
72. AUDIT LOG
============================================================

Record:

LOGIN

SEARCH_STARTED

SEARCH_COMPLETED

SEARCH_FAILED

EXPORT_CREATED

PROSPECT_CREATED

PROSPECT_UPDATED

STATUS_CHANGED

NOTE_CREATED

DEMO_CREATED

PROVIDER_ENABLED

PROVIDER_DISABLED

API_LIMIT_REACHED

SETTINGS_CHANGED

============================================================
73. SECURITY
============================================================

Implement:

authentication

authorization

RBAC

rate limiting

input validation

output encoding

secure headers

XSS protection

SQL injection protection

CSRF protection where applicable

SSRF protection

secret management

audit logging

secure cookies

password hashing

session security

============================================================
74. API SECURITY
============================================================

Never expose:

API keys

database credentials

Redis credentials

private tokens

service account secrets

Secrets belong in:

environment variables

secret manager

secure deployment configuration

============================================================
75. DATABASE
============================================================

Use PostgreSQL.

Recommended entities:

User

Role

BusinessEntity

BusinessSource

Prospect

ProspectClassification

ProspectTag

ProspectNote

SearchJob

SearchTask

SearchPreset

ExportJob

Provider

ProviderUsage

AuditLog

Demo

============================================================
76. INDEXING
============================================================

Create indexes on:

place/provider IDs

canonicalName

country

region

city

category

websiteStatus

leadScore

leadStatus

createdAt

updatedAt

============================================================
77. SEARCH PERFORMANCE
============================================================

Must support large datasets.

Use:

cursor pagination

server-side filtering

database indexes

ClickHouse analytics

Parquet partitioning

background processing

virtualized table

lazy loading

debounced search

Never load millions of records into browser memory.

============================================================
78. CACHE
============================================================

Redis may be used for:

job state

rate limiting

temporary cache

worker coordination

Do not use Redis as permanent source-of-truth database.

============================================================
79. MOCK MODE
============================================================

Create:

MOCK_MODE=true

Mock providers:

MockOvertureProvider

MockFoursquareProvider

MockGoogleProvider

MockGeoProvider

Tests must work without real API keys.

============================================================
80. TEST DATA
============================================================

Create deterministic mock dataset.

Minimum:

1,000 businesses

Include:

different countries

different categories

duplicate businesses

businesses with websites

businesses without listed websites

social-only businesses

invalid records

incomplete records

============================================================
81. LARGE DATA TEST
============================================================

Create generated test dataset:

1,000,000 records

Do not commit the huge dataset to Git.

Generate it through a script.

Test:

search

filter

deduplication

classification

analytics

pagination

export job

============================================================
82. TEST SUITE
============================================================

Unit tests:

website detection

classification

lead scoring

entity resolution

deduplication

query parsing

URL validation

provider adapters

export sanitization

Integration:

database

Redis

worker

provider

search job

export

authentication

E2E:

login

discover

search

view results

filter

open prospect

change status

add note

create demo

export

============================================================
83. API TESTING
============================================================

Test:

authentication

authorization

validation

rate limiting

pagination

filters

search jobs

provider failures

quota failures

============================================================
84. FAILURE TESTING
============================================================

Simulate:

429

500

502

503

504

timeout

network failure

provider unavailable

database unavailable

Redis unavailable

invalid API key

invalid query

empty results

duplicate results

Ensure graceful recovery.

============================================================
85. OBSERVABILITY
============================================================

Implement:

structured logs

metrics

job metrics

provider metrics

worker metrics

error tracking

health checks

readiness checks

liveness checks

============================================================
86. HEALTH ENDPOINTS
============================================================

Create:

/health

/readiness

/liveness

Provider health should be visible to admins.

============================================================
87. DOCKER
============================================================

Create:

Dockerfile

docker-compose.yml

Services:

frontend

api

worker

postgres

redis

clickhouse

Optional:

nginx

Optional:

object storage

============================================================
88. DOCKER NETWORK
============================================================

All internal services communicate through private Docker network.

Only required public ports should be exposed.

Do not expose:

PostgreSQL publicly

Redis publicly

ClickHouse publicly

unless explicitly configured for secure external access.

============================================================
89. ENVIRONMENT
============================================================

Create:

.env.example

Variables:

NODE_ENV

APP_URL

DATABASE_URL

REDIS_URL

CLICKHOUSE_URL

GOOGLE_MAPS_API_KEY

FOURSQUARE_API_KEY

GEOAPIFY_API_KEY

OBJECT_STORAGE_ENDPOINT

OBJECT_STORAGE_ACCESS_KEY

OBJECT_STORAGE_SECRET_KEY

AUTH_SECRET

MOCK_MODE

SEARCH_DAILY_LIMIT

SEARCH_MONTHLY_LIMIT

SEARCH_JOB_LIMIT

EXPORT_RETENTION_DAYS

============================================================
90. FRONTEND STACK
============================================================

Recommended:

Next.js

TypeScript

Tailwind CSS

shadcn/ui or equivalent

TanStack Query

Zod

React Hook Form

Use strong typing.

============================================================
91. BACKEND STACK
============================================================

Recommended:

NestJS

TypeScript

Prisma

PostgreSQL

Redis

BullMQ

============================================================
92. ANALYTICS STACK
============================================================

ClickHouse

DuckDB

Parquet

Object Storage

============================================================
93. UI DESIGN
============================================================

Design language:

premium

dark

modern

technical

professional

high-end

high information density

responsive

fast

Do not make it look like a generic CRUD admin dashboard.

Concept:

GLOBAL SALES INTELLIGENCE CONTROL CENTER

Use:

glass panels

subtle gradients

clean typography

data visualization

micro animations

smooth transitions

professional status indicators

Avoid excessive animation that hurts usability.

============================================================
94. RESPONSIVE
============================================================

Support:

desktop

laptop

tablet

mobile

Desktop is primary.

Mobile must remain usable for:

prospect viewing

status changes

notes

search

quick actions

============================================================
95. ACCESSIBILITY
============================================================

Implement:

keyboard navigation

ARIA where appropriate

focus states

sufficient contrast

semantic HTML

screen-reader-friendly controls

============================================================
96. SEARCH RESULT UX
============================================================

When search starts:

show job status.

When running:

show:

progress

results

duplicates

website opportunities

errors

When complete:

show:

SEARCH COMPLETE

and summary.

============================================================
97. SEARCH SUMMARY
============================================================

Example:

SEARCH COMPLETE

Businesses discovered:
4,821

Unique businesses:
3,921

Website listed:
2,411

No website listed:
1,102

Possible website:
408

Website opportunities:
723

Hot leads:
181

Duplicates removed:
900

============================================================
98. NO RESULT STATE
============================================================

Display:

"No businesses matched the current search criteria."

Provide:

Modify filters

Expand location

Change keywords

Change provider

============================================================
99. QUOTA STATE
============================================================

If provider quota is reached:

SEARCH PAUSED

Reason:

Provider limit reached.

Do NOT retry endlessly.

Admin can resume after configuration changes.

============================================================
100. NATURAL LANGUAGE ASSISTANT
============================================================

Optional AI assistant.

Capabilities:

convert natural language to filters

suggest keywords

classify businesses

explain score

summarize prospect

identify likely duplicate

suggest prospect priority

prepare contact draft

The assistant must never automatically send messages.

============================================================
101. CONTACT ASSISTANCE
============================================================

Allow:

Prepare WhatsApp message

Prepare email

Prepare Instagram DM draft

The message must be reviewed manually.

No mass spam automation.

============================================================
102. PROSPECT WORKFLOW
============================================================

Example:

Business found

↓

NO WEBSITE LISTED

↓

Lead score 91

↓

HOT

↓

Add to leads

↓

Create website demo

↓

Demo ready

↓

Contact

↓

Interested

↓

Negotiation

↓

CLIENT

============================================================
103. DEMO INTEGRATION
============================================================

Store:

demoUrl

demoStatus

demoCreatedAt

demoNotes

Allow opening demo.

The application does NOT need to automatically create the
website itself unless a future provider integration is added.

============================================================
104. SEARCH PRESET EXAMPLE
============================================================

Preset:

"Bogor Distro Opportunities"

Country:

Indonesia

Region:

Jawa Barat

City:

Bogor

Category:

Clothing

Keywords:

distro
streetwear
fashion

Website:

NO WEBSITE LISTED

Lead:

>= 70

============================================================
105. GLOBAL PRESET EXAMPLE
============================================================

Preset:

"Los Angeles Clothing Opportunities"

Country:

United States

Region:

California

City:

Los Angeles

Category:

Clothing

Website:

NO WEBSITE LISTED

Lead:

>= 75

============================================================
106. DATA SOURCE TRANSPARENCY
============================================================

Every prospect must show:

SOURCE

Example:

Sources:

Overture

Foursquare

Google Places

If information is inferred:

show:

AI INFERENCE

If user supplied:

show:

USER PROVIDED

============================================================
107. CONFIDENCE
============================================================

Confidence values:

HIGH

MEDIUM

LOW

For website:

websiteConfidence

For classification:

classificationConfidence

For entity matching:

entityMatchConfidence

============================================================
108. NO FAKE COVERAGE
============================================================

Never claim:

"All businesses in Indonesia"

unless actual source coverage supports that statement.

Use:

"Discovered businesses within configured provider coverage."

Show provider limitations.

============================================================
109. NO FAKE RECORD COUNTS
============================================================

Every count displayed must come from actual database/index
queries.

Do not hardcode:

100M businesses

10M leads

etc.

============================================================
110. DATA FRESHNESS
============================================================

Track:

retrievedAt

updatedAt

lastVerifiedAt

Show:

Fresh

Stale

Unknown

according to configurable rules.

============================================================
111. REFRESH
============================================================

Allow authorized refresh of selected records where supported.

Do not refresh the entire global dataset blindly.

============================================================
112. ARCHIVE
============================================================

Prospects can be archived.

Archived records are excluded from default search.

Allow restore.

============================================================
113. DELETE
============================================================

Admin can permanently delete internal records.

Deletion must be auditable.

============================================================
114. IMPORT
============================================================

Import wizard:

Upload

↓

Detect columns

↓

Map columns

↓

Preview

↓

Validate

↓

Import

↓

Report

Support:

CSV

XLSX

JSON

Parquet

============================================================
115. IMPORT VALIDATION
============================================================

Validate:

business name

country

location

URL

phone

category

duplicate candidates

Show errors before import.

============================================================
116. EXPORT JOB
============================================================

Large exports must be asynchronous.

Create:

ExportJob

Statuses:

QUEUED

RUNNING

COMPLETED

FAILED

CANCELLED

Do not freeze the server for huge exports.

============================================================
117. EXPORT FILE SECURITY
============================================================

Generated files:

must have controlled access

must have expiration

must not expose internal secrets

must follow source licensing restrictions

============================================================
118. AUDIT
============================================================

Perform a final system-wide audit.

Verify:

Frontend → API

API → database

API → queue

Queue → worker

Worker → provider

Worker → normalization

Normalization → entity resolution

Entity resolution → classification

Classification → scoring

Scoring → prospect

Prospect → pipeline

Pipeline → demo

Prospect → export

Analytics → database

Authentication → authorization

Admin → configuration

============================================================
119. DEAD CODE AUDIT
============================================================

Find:

unused files

unused imports

unused components

unused APIs

dead routes

fake services

placeholder functions

TODO implementations

mock production paths

Remove or complete them.

============================================================
120. ERROR AUDIT
============================================================

Search for:

TODO

FIXME

throw new Error("Not implemented")

placeholder

mock

fake

dummy

coming soon

temporary

console.log

disabled validation

disabled authentication

disabled authorization

Resolve production-relevant issues.

============================================================
121. TYPE SAFETY
============================================================

Do not use:

any

everywhere.

Use strong types.

Only use any when absolutely justified and documented.

============================================================
122. DATABASE MIGRATIONS
============================================================

Create proper migrations.

Never require manual undocumented SQL changes.

============================================================
123. SEED
============================================================

Create development seed data.

Seed must be clearly marked development-only.

Do not use fake seed data in production mode.

============================================================
124. DOCUMENTATION
============================================================

Create:

README.md

ARCHITECTURE.md

DATABASE.md

PROVIDERS.md

DATA_PIPELINE.md

WEBSITE_DISCOVERY.md

CLASSIFICATION.md

LEAD_SCORING.md

DEPLOYMENT.md

DOCKER.md

SECURITY.md

DATA_GOVERNANCE.md

API.md

TESTING.md

============================================================
125. README
============================================================

README must include:

project overview

features

architecture

requirements

installation

environment variables

development

Docker

database

providers

testing

production deployment

limitations

data governance

============================================================
126. PROVIDER DOCUMENTATION
============================================================

Explain:

which provider is enabled

how to configure it

which fields are used

rate limits

retention

attribution

export limitations

============================================================
127. SECURITY DOCUMENTATION
============================================================

Explain:

authentication

RBAC

API security

secret handling

SSRF

XSS

SQL injection

rate limiting

audit logs

export security

============================================================
128. DEPLOYMENT
============================================================

Support:

local Docker

staging

production

Document:

environment

database migration

worker startup

Redis

ClickHouse

object storage

reverse proxy

HTTPS

monitoring

backup

============================================================
129. PRODUCTION CHECKLIST
============================================================

Before declaring production-ready:

[ ] HTTPS

[ ] secure cookies

[ ] production secrets

[ ] database migrations

[ ] worker running

[ ] Redis running

[ ] ClickHouse running

[ ] provider keys configured

[ ] usage limits configured

[ ] rate limits configured

[ ] logs configured

[ ] health checks working

[ ] backups configured

[ ] export policy configured

[ ] authentication tested

[ ] authorization tested

============================================================
130. ACCEPTANCE TEST - INDONESIA
============================================================

Search:

Indonesia

Jawa Barat

Bogor

Clothing

distro

Website:

NO WEBSITE LISTED

Expected:

job created

worker executes

businesses returned

duplicates resolved

classification calculated

website status calculated

lead score calculated

website opportunities displayed

hot leads displayed

prospect detail works

status change works

notes work

export works where permitted

============================================================
131. ACCEPTANCE TEST - UNITED STATES
============================================================

Search:

United States

California

Los Angeles

Clothing

Website:

NO WEBSITE LISTED

Expected:

same architecture works.

No code modification.

============================================================
132. ACCEPTANCE TEST - AUSTRALIA
============================================================

Search:

Australia

Victoria

Melbourne

Restaurant

Expected:

same architecture works.

============================================================
133. ACCEPTANCE TEST - LARGE DATASET
============================================================

Generate:

1,000,000 test records.

Test:

search

filter

sorting

pagination

analytics

classification

deduplication

lead scoring

export job

UI responsiveness

============================================================
134. ACCEPTANCE TEST - PROVIDER FAILURE
============================================================

Simulate:

provider unavailable

Expected:

job does not corrupt data.

System reports:

PROVIDER UNAVAILABLE

Job can be retried.

============================================================
135. ACCEPTANCE TEST - RATE LIMIT
============================================================

Simulate:

429

Expected:

worker backs off.

No rate-limit bypass.

Job continues when permitted.

============================================================
136. ACCEPTANCE TEST - AUTHORIZATION
============================================================

Viewer attempts:

provider configuration

Expected:

DENIED

Admin:

allowed

============================================================
137. ACCEPTANCE TEST - EXPORT SECURITY
============================================================

Attempt formula injection.

Expected:

sanitized output.

============================================================
138. ACCEPTANCE TEST - SSRF
============================================================

Attempt:

http://127.0.0.1

http://localhost

http://169.254.169.254

Expected:

BLOCKED

============================================================
139. PERFORMANCE REQUIREMENT
============================================================

The application should be architected to support:

millions of business entities

thousands of concurrent search jobs over time

large analytics workloads

large exports

without loading all data into memory.

Actual production capacity must be benchmarked rather than
claimed.

============================================================
140. SCALABILITY
============================================================

Architecture must allow horizontal scaling:

frontend replicas

API replicas

worker replicas

ClickHouse scaling

PostgreSQL scaling

object storage scaling

Redis scaling

============================================================
141. WORKER SCALING
============================================================

Worker pool must support:

WORKER_1

WORKER_2

WORKER_3

...

Workers must coordinate through Redis.

============================================================
142. SEARCH PARTITIONING
============================================================

Partition large searches by:

country

region

city

geographic tile

category

keyword

provider

Do not create uncontrolled explosion of jobs.

Use configurable concurrency.

============================================================
143. JOB PRIORITY
============================================================

Support:

LOW

NORMAL

HIGH

URGENT

HOT LEAD REFRESH

Workers process according to priority.

============================================================
144. DATA QUALITY
============================================================

Implement quality scoring.

Factors:

name completeness

address completeness

phone completeness

category completeness

website verification

source agreement

location accuracy

Output:

HIGH

MEDIUM

LOW

============================================================
145. BUSINESS OPPORTUNITY SCORE
============================================================

Separate:

DATA QUALITY SCORE

from:

LEAD SCORE

from:

WEBSITE CONFIDENCE

Do not mix them into one unexplained number.

============================================================
146. FINAL LEAD SCORE VIEW
============================================================

Display:

Lead Score:
91 / 100

Breakdown:

Website opportunity:
35

Social presence:
10

Phone:
10

Active:
10

Commercial category:
10

Data confidence:
5

High website need:
10

Total:
90

Use actual configured values.

============================================================
147. ADMIN SCORING CONFIGURATION
============================================================

Admin can modify:

weights

thresholds

categories

priority ranges

website opportunity threshold

============================================================
148. ANALYTICS FUNNEL
============================================================

Show:

DISCOVERED

↓

RESEARCHED

↓

WEBSITE OPPORTUNITY

↓

DEMO CREATED

↓

CONTACTED

↓

INTERESTED

↓

NEGOTIATION

↓

CLIENT

Calculate actual conversion rates.

============================================================
149. SEARCH HISTORY
============================================================

Users can see:

previous searches

filters

provider

results

date

status

They can:

rerun

duplicate

delete

save as preset

============================================================
150. FAVORITES
============================================================

Allow:

favorite prospect

favorite search

favorite category

============================================================
151. NOTIFICATION SYSTEM
============================================================

Optional notifications:

search complete

export complete

provider error

quota warning

hot lead discovered

demo deadline

============================================================
152. SYSTEM SETTINGS
============================================================

Settings:

default country

default language

timezone

lead threshold

website opportunity threshold

search concurrency

provider priority

retention

export rules

============================================================
153. LOCALIZATION
============================================================

Initial languages:

Indonesian

English

Use i18n architecture.

Do not hardcode user-facing strings throughout components.

============================================================
154. TIMEZONE
============================================================

Store timestamps in UTC.

Render in user's configured timezone.

============================================================
155. LOGGING
============================================================

Use structured logging.

Never log:

API keys

passwords

tokens

session secrets

database passwords

============================================================
156. HEALTH MONITORING
============================================================

Health:

API

Database

Redis

ClickHouse

Workers

Providers

Object storage

============================================================
157. BACKUP
============================================================

Implement documented backup strategy.

Backup:

application database

configuration

internal prospect pipeline

audit logs

Do not blindly create indefinite backups of provider data that
is subject to retention restrictions.

============================================================
158. MIGRATION
============================================================

All schema changes must use migrations.

============================================================
159. CI/CD
============================================================

Create CI pipeline.

Steps:

install

lint

typecheck

unit tests

integration tests

build

Docker build

security checks

============================================================
160. CODE QUALITY
============================================================

Use:

ESLint

Prettier

TypeScript strict mode

dependency audit

proper error handling

structured architecture

============================================================
161. DIRECTORY STRUCTURE
============================================================

Use a clean scalable monorepo.

Recommended:

apps/

    web/

    api/

    worker/

packages/

    database/

    providers/

    classification/

    lead-scoring/

    entity-resolution/

    website-discovery/

    search-engine/

    shared/

    config/

    security/

infra/

    docker/

    migrations/

    scripts/

docs/

tests/

============================================================
162. SHARED PACKAGES
============================================================

Shared types:

packages/shared

Provider interfaces:

packages/providers

Scoring:

packages/lead-scoring

Classification:

packages/classification

Entity resolution:

packages/entity-resolution

Website:

packages/website-discovery

Search:

packages/search-engine

Database:

packages/database

============================================================
163. API ROUTES
============================================================

Implement APIs for:

auth

users

providers

search

search-jobs

businesses

prospects

classification

lead-score

website-discovery

notes

tags

pipeline

demos

exports

analytics

settings

audit

============================================================
164. API VALIDATION
============================================================

Use Zod or equivalent.

Every external input must be validated.

============================================================
165. PAGINATION
============================================================

Support:

cursor pagination

limit

sorting

filters

Do not use unrestricted SELECT * on massive tables.

============================================================
166. API ERROR FORMAT
============================================================

Standardize:

code

message

details

requestId

timestamp

Example:

{
    "code": "PROVIDER_RATE_LIMITED",
    "message": "The configured provider rate limit was reached.",
    "requestId": "...",
    "timestamp": "..."
}

Do not expose internal stack traces.

============================================================
167. REQUEST ID
============================================================

Every API request gets:

requestId

Propagate it through:

API

worker

logs

job

audit where appropriate.

============================================================
168. IDEMPOTENCY
============================================================

Search jobs and exports must support idempotency where necessary.

Do not accidentally create duplicate jobs because a request is
repeated.

============================================================
169. CONCURRENCY
============================================================

Prevent:

duplicate workers

duplicate exports

duplicate imports

duplicate prospect creation

Use database constraints and job locks.

============================================================
170. DATABASE CONSTRAINTS
============================================================

Add appropriate unique constraints.

Example:

provider + providerId

must be unique where applicable.

============================================================
171. SEARCH CACHE
============================================================

Do not create unrestricted permanent cache of provider data.

If temporary caching is implemented:

use TTL

document it

make it provider-policy aware.

============================================================
172. PROVIDER LICENSE AWARENESS
============================================================

The system must track:

provider

license type

allowed persistence

allowed export

attribution requirements

retention

The admin interface should warn if configuration conflicts with
declared policy.

============================================================
173. USER-PROVIDED DATA
============================================================

User-imported data is treated separately.

Source:

USER_IMPORT

The user may control retention/export according to their own
rights over that data.

============================================================
174. NO MASS SPAM
============================================================

The system is for lead research.

It must NOT automatically:

send mass WhatsApp messages

send mass email

send mass Instagram DMs

create fake accounts

bypass platform limits

The contact workflow only prepares drafts.

The user sends manually.

============================================================
175. AI SAFETY
============================================================

AI must not:

invent phone numbers

invent websites

invent business owners

invent legal status

invent addresses

invent ratings

invent reviews

If information is missing:

return:

UNKNOWN

============================================================
176. SOURCE PRIORITY
============================================================

When multiple providers disagree:

preserve all source values.

Use source confidence.

Do not silently overwrite.

Example:

Provider A:
website X

Provider B:
website Y

Store both.

Resolve with confidence.

============================================================
177. CANONICAL RECORD
============================================================

Canonical business record should include:

canonical value

source values

confidence

last verified

resolution method

============================================================
178. DATA LINEAGE
============================================================

For every important field allow:

source

sourceId

retrievedAt

transformation

confidence

This is critical for auditing.

============================================================
179. ADMIN DATA LINEAGE
============================================================

Admin should be able to inspect:

Why was this business classified as Distributor?

Answer:

Google category
+
business name
+
AI inference

Confidence:

0.87

============================================================
180. FINAL UI QUALITY
============================================================

The final UI must look like a real commercial SaaS product.

Use:

responsive layout

dark premium dashboard

professional cards

interactive tables

charts

filters

search command interface

job progress

map

lead pipeline

clear hierarchy

Do not overuse neon.

Do not make every element glow.

============================================================
181. FINAL IMPLEMENTATION ORDER
============================================================

Implement in this order:

PHASE 1

Repository audit

PHASE 2

Architecture

PHASE 3

Monorepo foundation

PHASE 4

Database

PHASE 5

Authentication

PHASE 6

Provider abstraction

PHASE 7

Mock provider

PHASE 8

Search engine

PHASE 9

Worker queue

PHASE 10

Business normalization

PHASE 11

Entity resolution

PHASE 12

Website discovery

PHASE 13

Classification

PHASE 14

Lead scoring

PHASE 15

Prospect pipeline

PHASE 16

Dashboard

PHASE 17

Search UI

PHASE 18

Prospect UI

PHASE 19

Analytics

PHASE 20

Export

PHASE 21

Data governance

PHASE 22

Provider integrations

PHASE 23

Docker

PHASE 24

Testing

PHASE 25

Security audit

PHASE 26

Performance testing

PHASE 27

System-wide integration audit

PHASE 28

Production verification

============================================================
182. PHASE EXECUTION RULE
============================================================

After every phase:

1. Implement.
2. Run relevant tests.
3. Typecheck.
4. Fix errors.
5. Verify integration.
6. Continue.

Do not wait until the end to discover broken architecture.

============================================================
183. FINAL SYSTEM-WIDE VERIFICATION
============================================================

Trace:

USER

↓

FRONTEND

↓

API

↓

AUTH

↓

SEARCH JOB

↓

REDIS

↓

WORKER

↓

PROVIDER

↓

NORMALIZATION

↓

ENTITY RESOLUTION

↓

WEBSITE DISCOVERY

↓

CLASSIFICATION

↓

LEAD SCORE

↓

PROSPECT

↓

POSTGRES / ANALYTICS

↓

DASHBOARD

↓

EXPORT

Verify every connection.

============================================================
184. FINAL DEAD CODE AUDIT
============================================================

Search repository for:

TODO

FIXME

NotImplemented

throw new Error

placeholder

dummy

fake

mock production

temporary

unused

console.log

disabled security

disabled validation

Remove or implement all production-relevant occurrences.

============================================================
185. FINAL ERROR AUDIT
============================================================

Run:

typecheck

lint

unit tests

integration tests

e2e tests

build

Docker build

startup

health checks

Fix every actual error.

============================================================
186. FINAL SECURITY AUDIT
============================================================

Check:

authentication

authorization

RBAC

secrets

SQL injection

XSS

CSRF

SSRF

rate limiting

file export

file import

formula injection

path traversal

command injection

unsafe redirects

dependency vulnerabilities

============================================================
187. FINAL PERFORMANCE AUDIT
============================================================

Benchmark:

1K

10K

100K

1M

records.

Measure:

search latency

filter latency

analytics latency

export duration

memory

CPU

worker throughput

database performance.

Do not invent benchmark results.

============================================================
188. FINAL ACCEPTANCE CRITERIA
============================================================

The system is COMPLETE only when:

[ ] Multi-country search works

[ ] Multi-region search works

[ ] City search works

[ ] Radius search works where supported

[ ] Category search works

[ ] Keyword search works

[ ] Natural language search works

[ ] Multiple providers supported

[ ] Provider abstraction works

[ ] Provider health works

[ ] Search jobs work

[ ] Workers work

[ ] Queue works

[ ] Rate limiting works

[ ] Retry works

[ ] Deduplication works

[ ] Entity resolution works

[ ] Website detection works

[ ] Website opportunity detection works

[ ] Social-only detection works

[ ] Business classification works

[ ] Business model classification works

[ ] Lead scoring works

[ ] Lead priority works

[ ] Prospect pipeline works

[ ] Notes work

[ ] Tags work

[ ] Demo tracking works

[ ] Search presets work

[ ] Dashboard works

[ ] Analytics works

[ ] Hot leads works

[ ] Website opportunities works

[ ] Export works where legally permitted

[ ] Import works

[ ] Authentication works

[ ] RBAC works

[ ] Admin works

[ ] Audit logging works

[ ] Docker works

[ ] PostgreSQL works

[ ] Redis works

[ ] ClickHouse works

[ ] Mock mode works

[ ] Security tests pass

[ ] E2E tests pass

[ ] Production build passes

[ ] No API secrets committed

[ ] No unauthorized scraping

[ ] No fake data in production

[ ] No fake feature buttons

[ ] Data lineage works

[ ] Data governance documented

[ ] Provider limitations documented

============================================================
189. FINAL REPORT
============================================================

At the end provide a structured report:

PROJECT STATUS

Architecture

Tech Stack

Directory Structure

Database

Provider System

Search Engine

Worker System

Data Lake

Entity Resolution

Website Discovery

Classification

Lead Scoring

Prospect Pipeline

Dashboard

Analytics

Export

Authentication

Security

Docker

Tests

Performance

Provider Configuration

Data Governance

Known Limitations

Remaining Work

Production Readiness

============================================================
190. IMPORTANT FINAL INSTRUCTION
============================================================

DO NOT merely generate a PRD.

BUILD THE ACTUAL APPLICATION.

DO NOT stop after creating the frontend.

DO NOT stop after creating the database.

DO NOT stop after creating mock providers.

Continue until the entire architecture is implemented.

Use mock providers for development.

Use real provider adapters where credentials/configuration exist.

Keep provider credentials optional.

The application must still boot without external provider keys
using MOCK_MODE=true.

============================================================
191. FINAL PRODUCT
============================================================

PROJECT-PROSPECTHUNTER

GLOBAL BUSINESS PROSPECT DISCOVERY ENGINE

The final product should allow the user to do:

SELECT COUNTRY
        ↓
SELECT REGION
        ↓
SELECT CITY
        ↓
SELECT BUSINESS CATEGORY
        ↓
SELECT KEYWORDS
        ↓
SEARCH
        ↓
DISCOVER BUSINESSES
        ↓
NORMALIZE
        ↓
DEDUPLICATE
        ↓
CHECK WEBSITE STATUS
        ↓
CLASSIFY BUSINESS
        ↓
CALCULATE LEAD SCORE
        ↓
FILTER WEBSITE OPPORTUNITIES
        ↓
VIEW HOT LEADS
        ↓
SAVE PROSPECT
        ↓
CREATE WEBSITE DEMO
        ↓
CONTACT MANUALLY
        ↓
FOLLOW UP
        ↓
CLIENT

============================================================
192. FINAL PRINCIPLE
============================================================

BUILD A REAL PRODUCT.

NOT A MOCKUP.

NOT A STATIC DASHBOARD.

NOT A GOOGLE MAPS SCRAPER.

NOT A FAKE GLOBAL DATABASE.

BUILD A SCALABLE,
MULTI-SOURCE,
MULTI-COUNTRY,
DATA-AWARE,
SECURE,
POLICY-AWARE,
PRODUCTION-READY
BUSINESS PROSPECT DISCOVERY PLATFORM.

START BY AUDITING THE CURRENT REPOSITORY.

THEN IMPLEMENT THE SYSTEM.

THEN TEST IT.

THEN AUDIT IT.

THEN FIX IT.

THEN VERIFY IT.

DO NOT CLAIM COMPLETION UNTIL THE SYSTEM ACTUALLY WORKS.
============================================================