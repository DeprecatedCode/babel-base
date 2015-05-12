/**
 * @module babel-base/patterns/meta
 * @author Nate Ferrero
 */
class AbstractMeta {
    onConstructor (constructor)
    onStaticMethod
    onClassMethod
    onMethod
    onClassProperty
    onProperty
}

class User extends ValidateProperties {
    metaclass = DatabaseRecord;

    name = String;
    foobar = String;
}

var user = new User();

user.name = 'f';

user.name.isValid();

