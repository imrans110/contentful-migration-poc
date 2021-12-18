# contentful-migration-poc

A POC for contentful migration


Minimal Steps to follow for migration —> 

- Create a migrations directory in root where the migrations will be written in js/ts files.
- The migration files need to be added in incremental order(For version tracking)
- Add a script to run these migrations

For Continuous Integration, GitHub actions can be used. 

Here's a breakdown of steps that need to be taken care of : - 

- Create a separate branch for writing any new migration
- Add Migration runner script
- Add Migration file
- Export and save the latest 'master' environment content type data from Contentful.
- Create a new temporary Contentful environment.
- Import latest 'master' environment content type data into this new temporary environment
- Run migrations on this new temporary branch.
- Test that temporary environment.
- If all goes well, merge the migration branch to master.
- Run migrations on master branch
- Delete temporary Contentful environment.

Migration script also needs to handle version tracking. To persist version tracking data, we need to create a new Content-type on Contentful space. 

I tried mainly two libraries `contentful-migrate` & `contentful-migraiton`.  Although, going with contentful migrate was a little less work for us but it had some open unresolved issues which have been there for quite some time so finally went with `contentful-migration`

Note: We want to save the latest Content Type data from master environment because there is no availability of rollback support in Contentful.
